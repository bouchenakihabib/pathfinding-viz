export function bfs (grid, startNode, finishNode) {
    const visitedNodesInOrder =[];
    let nextNodes = [startNode];
    while (nextNodes.length) {
        const currentNode = nextNodes.shift();
        if (currentNode === finishNode) {
            return visitedNodesInOrder;
        }
        if (!currentNode.isWall &&  !currentNode.isVisited) {
            currentNode.isVisited = true;
            visitedNodesInOrder.push(currentNode);
            const {col,row} = currentNode;
            let nextNode;
            if (row > 0) {
                nextNode = grid[row - 1][col];
                if (!nextNode.isVisited) {
                    nextNode.previousNode = currentNode;
                    nextNodes.push(nextNode);
                }
            }
            if (row < grid.length - 1) {
                nextNode = grid[row + 1][col];
                if (!nextNode.isVisited) {
                    nextNode.previousNode = currentNode;
                    nextNodes.push(nextNode);
                }
            }
            if (col > 0) {
                nextNode = grid[row][col - 1];
                if (!nextNode.isVisited) {
                    nextNode.previousNode = currentNode;
                    nextNodes.push(nextNode);
                }
            }
            if (col < grid[0].length - 1) {
                nextNode = grid[row][col + 1];
                if (!nextNode.isVisited) {
                    nextNode.previousNode = currentNode;
                    nextNodes.push(nextNode);
                }
            }
        }
    }
}