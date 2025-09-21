package civaApi.repository;

import civaApi.model.Bus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public  interface BusRepository extends JpaRepository<Bus, Long>{

}
