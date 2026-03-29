package talk_to_my_portfolio.dev.service;

import lombok.RequiredArgsConstructor;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.client.advisor.QuestionAnswerAdvisor;
import org.springframework.ai.vectorstore.VectorStore;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ChatService {

    private final ChatClient chatClient;
    private final VectorStore vectorStore;

    public String getChatResponse(String message) {
        return chatClient.prompt()
                .user(message)
                // QuestionAnswerAdvisor가 RAG의 핵심 로직(검색 + 답변 생성)을 자동으로 처리합니다.
                .advisors(new QuestionAnswerAdvisor(vectorStore))
                .call()
                .content();
    }
}
