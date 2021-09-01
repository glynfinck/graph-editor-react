from js import nodes, edges, node_ids, postMessage

class Graph:
  def __init__(self, graph = None):
    self.G = nx.Graph()
    if graph:
      # add all nodes

      for i, node in enumerate(graph["nodes"]):
        self.G.add_node(node, id=graph["node_ids"][i])

      # add all edges
      for edge in graph["edges"]:
        self.G.add_edge(edge[0], edge[1])
  
  def _postMessage(self, msg):
    postMessage(**msg)

  def getEdges(self, data=False):
    if data:
      return self.G.edges.data()
    else:
      return self.G.edges

  def getNodes(self, data=False):
    if data:
      return self.G.nodes.data()
    else:
      return self.G.nodes

  def setCurrentNode(self, _id, peek=False, path=False):
    try:
      i_id = self.G.nodes[_id]["id"]
      self._postMessage({ "type": "ADD_FRAME", "frame_type": "PYTHON_SET_CURRENT", "id": i_id , "peek": peek, "path": path})
    except KeyError as e:
      print("The id " + str(e) + " is not present in the graph.")

  def setCurrentEdge(self, source_id, target_id, peek=False, path=False):
    try:
      source = self.G.nodes[source_id]["id"]
      target = self.G.nodes[target_id]["id"]
      self._postMessage({ "type": "ADD_FRAME", "frame_type": "PYTHON_SET_CURRENT", "source" : source, "target" :  target, "peek": peek, "path": path })
    
    except KeyError as e:
      print("The id " + str(e) + " is not present in the graph.")
   
  def getNeighbors(self, _id):
    return self.G.adj[_id]

graphData = {
  "node_ids": node_ids,
  "nodes": nodes,
  "edges": edges
}