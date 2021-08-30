g = Graph(graphData)

################################
#                              #
#       Place Code Below       #
#             Here             #         
#                              #
################################

## example (Depth First Search) ##

visited = set() # Set to keep track of visited nodes.

def dfs(visited, graph, node):
    if node not in visited:
        print (node)
        visited.add(node)
        # activate node when we add to visited
        g.activateNode(node)
        for neighbour in graph.getNeighbors(node):
            # activate edge when we recurse
            g.activateEdge(node, neighbour)
            dfs(visited, graph, neighbour)

dfs(visited, g, 'A')