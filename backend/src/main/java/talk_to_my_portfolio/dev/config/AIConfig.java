package talk_to_my_portfolio.dev.config;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.embedding.EmbeddingModel;
import org.springframework.ai.vectorstore.SimpleVectorStore;
import org.springframework.ai.vectorstore.VectorStore;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.io.File;

@Configuration
public class AIConfig {

    @Value("${spring.app.vector-store.path}")
    private String vectorStorePath;

    @Bean
    public ChatClient chatClient(ChatClient.Builder builder) {
        // ChatClient.Builder는 스프링이 자동으로 제공해주며, 이를 통해 ChatClient를 생성합니다.
        return builder.build();
    }

    @Bean
    public VectorStore vectorStore(EmbeddingModel embeddingModel) {
        // 파일 기반의 간단한 벡터 저장소를 생성합니다.
        SimpleVectorStore vectorStore = new SimpleVectorStore(embeddingModel);

        // 기존에 저장된 파일이 있다면 불러옵니다.
        File file = new File(vectorStorePath);
        if (file.exists()) {
            vectorStore.load(file);
        }
        return vectorStore;
    }
}
