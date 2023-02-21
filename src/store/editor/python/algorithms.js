export const dfs = `visited = set() # Set to keep track of visited nodes.

def dfs(visited, graph, node):
    if node not in visited:
        print (node)
        visited.add(node)
        # activate node when we add to visited
        graph.setCurrentNode(node)
        for neighbour in graph.getNeighbors(node):
            # activate edge when we recurse
            if neighbour not in visited:
                graph.setCurrentEdge(node, neighbour)
            else:
                graph.setCurrentEdge(node, neighbour, peek=True)
            dfs(visited, graph, neighbour)
            graph.setCurrentNode(node, peek=True)

dfs(visited, graph, 'A')`;

export const bfs = `visited = [] # List to keep track of visited nodes.
queue = []     #Initialize a queue

def bfs(visited, graph, node):
    visited.append(node)
    queue.append(node)

    while queue:
        s = queue.pop(0) 
        graph.setCurrentNode(s)
        print(s)
        for neighbour in graph.getNeighbors(s):
            if neighbour not in visited:
                graph.setCurrentEdge(s, neighbour)
                graph.setCurrentNode(neighbour)
                visited.append(neighbour)
                queue.append(neighbour)
            else:
                graph.setCurrentEdge(s, neighbour, peek=True)

# Driver Code
bfs(visited, graph, 'A')`;
export const dikstras = `# re-factored from (https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/)

def minDistance(dist, sptSet):
 
    # Initialize minimum distance for next node
    minimum = np.inf

    # Search not nearest vertex not in the
    # shortest path tree
    min_index = 0
    for v in graph.getNodes():
        if dist[v] < minimum and sptSet[v] == False:
            minimum = dist[v]
            min_index = v

    return min_index
 
def dijkstra(src):
    N = len(graph.getNodes())

    dist = dict()
    sptSet = dict()
    prev = dict()
    for node in graph.getNodes():
        dist[node] = np.inf
        sptSet[node] = False
        prev[node] = None

    dist[src] = 0

    for cout in range(N):

        # Pick the minimum distance vertex from
        # the set of vertices not yet processed.
        # u is always equal to src in first iteration
        u = minDistance(dist, sptSet)

        # set u to be the current node
        graph.setCurrentNode(u)

        # Put the minimum distance vertex in the
        # shortest path tree
        sptSet[u] = True

        # Update dist value of the adjacent vertices
        # of the picked vertex only if the current
        # distance is greater than new distance and
        # the vertex in not in the shortest path tree
        for v in graph.getNodes():
            if graph.hasEdge(u, v) and sptSet[v] == False and dist[v] > dist[u] + 1:
                # set u,v to be the current edge
                graph.setCurrentEdge(u,v)
                prev[v] = u
                dist[v] = dist[u] + 1
    
    return prev, dist

source = "A"
target = "D"
prev, dist = dijkstra(source)

print(prev)
print(dist)

path = []
u = target
if prev[u] or u == source:
    while u:
        path = [u] + path
        u = prev[u]

print(path)

for i in range(0,len(path)-1):
    graph.setCurrentNode(path[i], path=True)
    graph.setCurrentEdge(path[i], path[i+1], path=True)
    graph.setCurrentNode(path[i+1], path=True)`;
