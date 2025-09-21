package civaApi.service;

import civaApi.model.Bus;
import civaApi.repository.BusRepository;
import civaApi.service.BusService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class BusServiceImpl implements BusService {
    private final BusRepository busRepository;

    public BusServiceImpl(BusRepository busRepository) {
        this.busRepository = busRepository;
    }

    @Override
    public Page<Bus> getAll(Pageable pageable) {
        return busRepository.findAll(pageable);
    }

    @Override
    public Optional<Bus> getById(Long id) {
        return busRepository.findById(id);
    }
}
