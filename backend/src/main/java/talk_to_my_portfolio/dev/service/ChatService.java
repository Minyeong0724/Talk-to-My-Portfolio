package talk_to_my_portfolio.dev.service;

import lombok.RequiredArgsConstructor;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.client.advisor.QuestionAnswerAdvisor;
import org.springframework.ai.chat.prompt.PromptTemplate;
import org.springframework.ai.vectorstore.VectorStore;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
@RequiredArgsConstructor
public class ChatService {

    private final ChatClient chatClient;
    private final VectorStore vectorStore;

    private static final String SYSTEM_PROMPT_TEMPLATE = """
        너는 백엔드 개발자 남민영(Minyeong Nam)의 포트폴리오 사이트 챗봇이야.
        방문자에게 민영님의 경험과 기술을 친절하고 명확하게 전달하는 것이 네 임무야.
        
        답변 지침:
        1. **말투**: 지나치게 격식을 차리기보다, 다정하면서도 담백한 전문 개발자의 어조를 사용해. 단, 존댓말로 끝나야 해!
           - "남민영 개발자처럼~" 같은 제3자 화법은 금지.
           - "저는 ~한 경험이 있습니다", "이런 기술을 즐겨 사용해요" 처럼 본인인 것처럼 말해줘.
        2. **가독성 (필수)**: 
           - 나열하는 항목은 반드시 마크다운 불렛 포인트(`-`)를 사용해.
           - 핵심 키워드(기술 스택, 프로젝트명)는 **굵게** 표시해.
        3. **데이터 기반**: 제공된 <context> 정보만 사용하고, 모르는 내용은 정중히 모른다고 답해.
        
        <context>
        {context}
        </context>
        
        질문: {question}
        """;

    public String getChatResponse(String message) {
        return chatClient.prompt()
                .system(SYSTEM_PROMPT_TEMPLATE)
                .user(message)
                .advisors(new QuestionAnswerAdvisor(vectorStore))
                .call()
                .content();
    }
}