package talk_to_my_portfolio.dev.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import talk_to_my_portfolio.dev.service.ChatService;

@RestController
@RequestMapping("/api/chat")
@RequiredArgsConstructor
// 프론트엔드 주소를 명시해줍니다. (포트번호 3000 확인!)
@CrossOrigin(origins = "${app.frontend.url}")
public class ChatController {

    private final ChatService chatService;

    // 긴 질문 처리를 위해 PostMapping으로 변경하는 것을 추천합니다.
    @PostMapping("/ask")
    public String ask(@RequestBody ChatRequest request) {
        return chatService.getChatResponse(request.getMessage());
    }
}

// 요청 데이터를 담을 간단한 DTO 클래스
@lombok.Data
class ChatRequest {
    private String message;
}