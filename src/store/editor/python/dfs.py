visited = set() # Set to keep track of visited nodes.

def dfs(visited, graph, node):
    if node not in visited:
        print (node)
        visited.add(node)
        # activate node when we add to visited
        g.setCurrentNode(node)
        for neighbour in graph.getNeighbors(node):
            # activate edge when we recurse
            if neighbour not in visited:
                g.setCurrentEdge(node, neighbour)
            else:
                g.setCurrentEdge(node, neighbour, peek=True)
            dfs(visited, graph, neighbour)
            g.setCurrentNode(node, peek=True)

dfs(visited, g, 'A')