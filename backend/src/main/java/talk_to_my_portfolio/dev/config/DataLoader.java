package talk_to_my_portfolio.dev.config;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.ai.document.Document;
import org.springframework.ai.reader.TextReader;
import org.springframework.ai.transformer.splitter.TokenTextSplitter;
import org.springframework.ai.vectorstore.VectorStore;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class DataLoader {

    // 이제 QdrantVectorStore가 자동으로 주입됩니다.
    private final VectorStore vectorStore;

    @Value("classpath:my-data.md")
    private Resource portfolioResource;

    // yaml에서 설정한 스위치 값을 가져옵니다. (기본값 false)
    @Value("${app.init-vector-store:false}")
    private boolean initVectorStore;

    @PostConstruct
    public void init() {
        // [핵심] 스위치가 꺼져있으면 임베딩 과정을 건너뜁니다.
        if (!initVectorStore) {
            System.out.println(">>> [알림] Vector Store 초기화가 비활성화되어 있습니다. Qdrant 클라우드의 기존 데이터를 사용합니다.");
            return;
        }

        try {
            System.out.println(">>> [시작] 포트폴리오 데이터를 Qdrant에 새로 임베딩합니다. (토큰 소모 발생)");

            // 1. 데이터 읽기
            TextReader textReader = new TextReader(portfolioResource);
            List<Document> documents = textReader.get();

            // 2. 텍스트 분할
            TokenTextSplitter splitter = new TokenTextSplitter();
            List<Document> splitDocuments = splitter.apply(documents);

            // 3. 벡터 저장소(Qdrant)에 데이터 적재
            vectorStore.add(splitDocuments);

            // 파일 저장 로직은 Qdrant를 사용하므로 더 이상 필요하지 않아 삭제했습니다.

            System.out.println(">>> [완료] Qdrant Cloud에 데이터 임베딩 및 적재가 완료되었습니다!");
            System.out.println(">>> [주의] application.yaml의 app.init-vector-store 값을 false로 변경해주세요.");

        } catch (Exception e) {
            System.err.println(">>> [오류] 데이터 로딩 중 에러가 발생했습니다: " + e.getMessage());
        }
    }
}