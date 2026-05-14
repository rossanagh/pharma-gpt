# Build: din folderul unde e pom.xml
#   docker compose build
# sau: docker build -t pharma-gpt-api .

FROM eclipse-temurin:17-jdk-jammy AS builder
WORKDIR /build
COPY pom.xml .
COPY .mvn .mvn
COPY mvnw .
COPY src src
RUN chmod +x mvnw && sed -i 's/\r$//' mvnw && ./mvnw -q -DskipTests package

FROM eclipse-temurin:17-jre-jammy
WORKDIR /app
COPY --from=builder /build/target/pharma-gpt-*.war app.war
# Render setează PORT (implicit 10000); EXPOSE e orientativ pentru scanare locală
EXPOSE 8083 10000
ENV SPRING_PROFILES_ACTIVE=prod
# Compilare C1-only la pornire = cold start mai scurt (trade-off: peak JIT mai târziu)
ENV JAVA_TOOL_OPTIONS="-XX:TieredStopAtLevel=1 -XX:MaxRAMPercentage=75.0"
ENTRYPOINT ["java","-jar","/app/app.war"]
