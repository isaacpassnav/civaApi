package civaApi.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.cors.CorsConfigurationSource;

import java.util.List;

@Configuration
public class CorsConfig {

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();

        configuration.setAllowedOrigins(List.of("http://localhost:5173"));
        // si en produccion usas varios dominios, agrega la lista correspondiente
        // configuration.setAllowedOriginPatterns(List.of("http://localhost:5173"));

        // Permitir credenciales (importantísimo para Basic Auth)
        configuration.setAllowCredentials(true);

        // Métodos permitidos
        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));

        // Headers permitidos (incluye Authorization)
        configuration.setAllowedHeaders(List.of("Authorization", "Content-Type", "Accept"));

        // Optional: Expose headers (si necesitas leerlos en el front)
        // configuration.setExposedHeaders(List.of("Authorization"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
