class Graph {
    constructor() {
        this.numberofNodes = 0;
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex] ) {
            this.adjacencyList[vertex] = new Set();
            this.numberofNodes++;
        }
    }

    addEdges(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].add(vertex2);
            this.adjacencyList[vertex2].add(vertex1);
            this.numberofNodes++;
        }
    }
}

const graph = new Graph();

graph.addVertex(1);
graph.addVertex(10);
graph.addVertex(100);
graph.addEdges(1, 10);
graph.addEdges(1, 100);
graph.addEdges(100, 111);

console.log(graph.adjacencyList);