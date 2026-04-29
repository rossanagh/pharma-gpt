package com.example.pharma_gpt.repository;

import com.example.pharma_gpt.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    Optional<User> findByEmailIgnoreCase(String email);

    Optional<User> findByPhoneNumber(String phoneNumber);

    boolean existsByEmail(String email);

    boolean existsByEmailIgnoreCase(String email);

    Optional<User> findByParafa(String parafa);

    @Query("""
        select u from User u
        where (
            (:t1 is null or :t1 = '' or
                lower(u.firstName) like lower(concat('%', :t1, '%')) or
                lower(u.lastName) like lower(concat('%', :t1, '%')) or
                lower(u.email) like lower(concat('%', :t1, '%')) or
                lower(coalesce(u.parafa, '')) like lower(concat('%', :t1, '%'))
            )
        )
          and (
            (:t2 is null or :t2 = '' or
                lower(u.firstName) like lower(concat('%', :t2, '%')) or
                lower(u.lastName) like lower(concat('%', :t2, '%')) or
                lower(u.email) like lower(concat('%', :t2, '%')) or
                lower(coalesce(u.parafa, '')) like lower(concat('%', :t2, '%'))
            )
        )
          and (
            (:t3 is null or :t3 = '' or
                lower(u.firstName) like lower(concat('%', :t3, '%')) or
                lower(u.lastName) like lower(concat('%', :t3, '%')) or
                lower(u.email) like lower(concat('%', :t3, '%')) or
                lower(coalesce(u.parafa, '')) like lower(concat('%', :t3, '%'))
            )
        )
        order by u.lastName asc, u.firstName asc
        """)
    List<User> searchTop20(@Param("t1") String t1,
                           @Param("t2") String t2,
                           @Param("t3") String t3,
                           org.springframework.data.domain.Pageable pageable);
}
