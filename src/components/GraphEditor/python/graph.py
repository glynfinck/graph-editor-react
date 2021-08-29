from js import nodes, edges, postMessage

class Graph:
  def __init__(self, graph = None, directed=False):
    self.G = nx.Graph()
    self.directed = directed
    if graph:
      # add all nodes
      for node in graph["nodes"]:
        self.G.add_node(node)

      # add all edges
      for edge in graph["edges"]:
        self.G.add_edge(edge[0], edge[1])
  
  def _postMessage(self, msg):
    postMessage(**msg)

  def getEdges(self, data=True):
    if data:
      return self.G.edges.data()
    else:
      return self.G.edges

  def getNodes(self, data=True):
    if data:
      return self.G.nodes.data()
    else:
      return self.G.nodes

  def activateNode(self, _id):
    self._postMessage({ "type": "PYTHON_ACTIVATE_NODE", "id": _id})

  
  def activateEdge(self, source_id, target_id):
    if (self.directed):
      self._postMessage({ "type": "PYTHON_ACTIVATE_EDGE", "source" : source_id, "target" : target_id })
    else:
      self._postMessage({ "type": "PYTHON_ACTIVATE_EDGE", "source" : source_id, "target" : target_id })
      self._postMessage({ "type": "PYTHON_ACTIVATE_EDGE", "source" : target_id, "target" : source_id })


  def getNeighbors(self, _id):
    return self.G.adj[_id]

graphData = {
  "nodes": nodes,
  "edges": edges
}