
# dockerfile

# docker build . -f nodejs-min.dockerfile -t nodejs-min
# docker run -di -p 2222:22 --name term nodejs-min

FROM node:22

RUN apt update && apt install -y openssh-server
RUN echo "root:node" | chpasswd
RUN sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config

RUN printf  "%s\n" \
"#!/bin/bash" \
"set -e" \
"whoami" \
"echo" \
"echo 'starting ssh'" \
"service ssh start" \
"echo" \
"echo" \
"/bin/bash" \
 > 'start-up.sh'
 
CMD ["bash","start-up.sh"]

