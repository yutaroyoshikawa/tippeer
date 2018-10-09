#!/bin/bash
cp $(cd $(dirname $0); pwd)/.env.example $(cd $(dirname $0); pwd)/.env
sed -i -e '10 s/127.0.0.1/tipperdbinstance.cra9bcvutwgz.us-east-2.rds.amazonaws.com/g' $(cd $(dirname $0); pwd)/.env
sed -i -e '12 s/homestead/tipperdb/g' $(cd $(dirname $0); pwd)/.env
sed -i -e '13 s/homestead/tipperuser/g' $(cd $(dirname $0); pwd)/.env
sed -i -e '14 s/secret/6fQ8wZbB/g' $(cd $(dirname $0); pwd)/.env
rm $(cd $(dirname $0); pwd)/.env-e
cd $(cd $(dirname $0); pwd)/../laradock
docker-compose exec workspace php artisan key:generate
