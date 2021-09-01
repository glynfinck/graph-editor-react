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
        print (s, end = " ") 
        
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
export const dikstras = `def dijkstra(start):
    Q = []
    dist = dict()
    prev = dict()

    for node in graph.getNodes():
        dist[node]= np.inf
        prev[node]= None
        Q.append(node)

    dist[start] = 0
    
    while len(Q) != 0:
        u_idx = np.argmin(dist)
        u = copy.deepcopy(Q[u_idx])
        graph.setCurrentNode(u)

        del Q[u_idx]
        
        for v in graph.getNeighbors(u):
            alt = dist[u] + 1
            if alt < dist[v]:
                if not prev[v]:
                    graph.setCurrentEdge(u, v)
                    graph.setCurrentNode(v)
                dist[v] = alt
                prev[v] = u
                
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
    graph.setCurrentNode(path[i+1], path=True)
`;
