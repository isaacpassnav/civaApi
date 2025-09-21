package civaApi.service;

import civaApi.model.Bus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.util.Optional;

public interface BusService {
    Page<Bus> getAll(Pageable pageable);
    Optional<Bus> getById(Long id);
}
