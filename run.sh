#build container app

docker build -t app ./

# run container app

docker run --name app -e PORT=4000 -p 4000:4000 app