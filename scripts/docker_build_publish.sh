DOCKER_BUILDKIT=1 docker build --platform=linux/amd64 -t registry.tools.anak.dev/felwine/documentation . && docker push registry.tools.anak.dev/felwine/documentation:latest