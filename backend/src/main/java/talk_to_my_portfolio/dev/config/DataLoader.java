package talk_to_my_portfolio.dev.config;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.ai.document.Document;
import org.springframework.ai.reader.TextReader;
import org.springframework.ai.transformer.splitter.TokenTextSplitter;
import org.springframework.ai.vectorstore.SimpleVectorStore;
import org.springframework.ai.vectorstore.VectorStore;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;

import java.io.File;
import java.util.List;

@Component
@RequiredArgsConstructor
public class DataLoader {

    private final VectorStore vectorStore;

    @Value("classpath:my-data.md")
    private Resource portfolioResource;

    @Value("${spring.app.vector-store.path}")
    private String vectorStorePath;

    @PostConstruct
    public void init() {
        File file = new File(vectorStorePath);

        // [핵심] 파일이 존재하고 내용이 있다면 학습 과정을 건너뜁니다.
        if (file.exists() && file.length() > 0) {
            System.out.println(">>> [알림] 기존 임베딩 파일이 발견되었습니다. 새로 학습하지 않고 기존 데이터를 사용합니다.");
            return;
        }

        try {
            System.out.println(">>> [시작] 포트폴리오 데이터를 새로 임베딩합니다. (토큰 소모 발생)");

            // 1. 데이터 읽기
            TextReader textReader = new TextReader(portfolioResource);
            List<Document> documents = textReader.get();

            // 2. 텍스트 분할
            TokenTextSplitter splitter = new TokenTextSplitter();
            List<Document> splitDocuments = splitter.apply(documents);

            // 3. 벡터 저장소에 추가 및 파일 저장
            vectorStore.add(splitDocuments);

            if (vectorStore instanceof SimpleVectorStore simpleStore) {
                // 저장 경로 폴더가 없으면 생성
                if (!file.getParentFile().exists()) {
                    file.getParentFile().mkdirs();
                }
                simpleStore.save(file);
            }
            System.out.println(">>> [완료] 포트폴리오 데이터 임베딩 및 파일 저장이 완료되었습니다!");

        } catch (Exception e) {
            System.err.println(">>> [오류] 데이터 로딩 중 에러가 발생했습니다: " + e.getMessage());
        }
    }
}