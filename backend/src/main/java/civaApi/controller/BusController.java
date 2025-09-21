package civaApi.controller;

import civaApi.model.Bus;
import civaApi.service.BusService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/bus")
@CrossOrigin(origins = "http://localhost:5173") //  conexión del front
public class BusController {
    private final BusService busService;

    public BusController(BusService busService) {
        this.busService = busService;
    }

    // GET /bus?page=0&size=10
    @GetMapping
    public Page<Bus> list(Pageable pageable) {
        return busService.getAll(pageable);
    }

    // GET /bus/{id}
    @GetMapping("/{id}")
    public ResponseEntity<Bus> getById(@PathVariable Long id) {
        return busService.getById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
