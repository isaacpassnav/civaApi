-- Insertar Marcas
INSERT INTO brand (id, name) VALUES
  (1, 'Volvo'),
  (2, 'Scania'),
  (3, 'Fiat');

-- Insertar Buses
INSERT INTO bus (id, number, plate, features, active, created_at, brand_id) VALUES
  (1, '001', 'ABC-123', 'Asientos reclinables, aire acondicionado', true, NOW(), 1),
  (2, '002', 'XYZ-789', 'WiFi, baño, TV', true, NOW(), 2),
  (3, '003', 'LMN-456', 'Semi cama, aire acondicionado', false, NOW(), 3);
