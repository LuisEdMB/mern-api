#!/bin/bash
app="mern-api"
docker build -t ${app} .
docker run --env-file=.env -d -p 2001:8080 --name=${app} ${app}