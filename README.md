# Graph Editor Documentation

This documents explains how to use the [Graph Editor](https://graph-editor-7e4ef.firebaseapp.com/) web application.

## Table of Contents

1. [Notes on Usage](#notes-on-usage)
2. [Editor](#editor)
   - [Graph Class](#graph-class)
     - [Set Current Node](#set-current-node)
     - [Set Current Edge](#set-current-edge)
     - [Get Neighbors of a Node](#get-neighbors-of-a-node)
     - [Get All Nodes](#get-all-nodes)
     - [Get All Edges](#get-all-edges)
     - [Has Node](#has-node)
     - [Has Edge](#has-edge)
3. [Graph](#graph)
   - [Creating Nodes](#creating-nodes)
   - [Creating Edges](#creating-edges)
   - [Deleting Nodes](#deleting-nodes)
   - [Deleting Edges](#deleting-edges)
4. [Dependencies](#dependencies)

## Notes on Usage

- The graph is treated as **un-directed** by default (no support for directed graph so far, this will be added in the future)
  - If edge (**A** -> **B**) exists then edge (**B** -> **A**) exists and vice versa.
- There currently is no support for **mobile devices** at the moment (this feature will come in the future)

## Editor

### Graph Class

#### Set Current Node

##### `setCurrentNode(id, peek=False, path=False)`

Setting the current node will give a red border around the node chosen using `id` and will make the fill of the node blue. Setting the current node will automatically un-set the previous current node/edge removing the red border. This alows the user to automatically keep track of visited nodes/edges while also showing the current node as well.

If the optional parameter `peek` is set to `True` then the node with id equal to `id` will not be set to blue and will remain white.

If the optional parameter `path` is set to `True` the node with id equal to `id` will be set to yellow instead of blue. This is used to indicate a path being found instead of one of the visited nodes/edges.

##### Usage

The following string of commands showcases how the method can be used.

```
g = Graph()
g.setCurrentNode("A")
g.setCurrentNode("B", peek=True)
g.setCurrentNode("C", path=True)
g.setCurrentNode("D", peek=True, path=True)
```

Producing the following result in our graph:

<p align="center">
  <img width="80%" height="100%" src="https://firebasestorage.googleapis.com/v0/b/graph-editor-7e4ef.appspot.com/o/graph-editor-set-current-node.gif?alt=media&token=36b444f7-dd3e-424e-8ee9-63dc22433776">
</p>

#### Set Current Edge

##### `setCurrentEdge(source_id, target_id, peek=False, path=False)`

Setting the current edge will give a red border around the edge chosen using `source_id` and `target_id` and will make the fill of the edge blue. Setting the current node will automatically un-set the previous current node/edge removing the red border. This alows the user to automatically keep track of visited nodes/edges while also showing the current edge as well.

If the optional parameter `peek` is set to `True` then the edge chosen using `source_id` and `target_id` will not be set to blue and will remain white.

If the optional parameter `path` is set to `True` the edge chosen using `source_id` and `target_id` will be set to yellow instead of blue. This is used to indicate a path being found instead of one of the visited nodes/edges.

##### Usage

The following string of commands showcases how the method can be used.

```
g = Graph()
g.setCurrentEdge("A","B")
g.setCurrentEdge("B","C", peek=True)
g.setCurrentEdge("C","D", path=True)
g.setCurrentEdge("D","A", peek=True, path=True)
```

Producing the following result in our graph:

<p align="center">
  <img width="80%" height="100%" src="https://firebasestorage.googleapis.com/v0/b/graph-editor-7e4ef.appspot.com/o/graph-editor-set-current-edge.gif?alt=media&token=59a38fc8-3058-45bf-a690-650ce960fa4e">
</p>

#### Get Neighbors of a Node

##### `getNeighbors(id)`

Returns all neighbors for a node with `id`.

##### Usage

For the following graph and input:

```
g = Graph()
neighbors = g.getNeighbors("A")
print(neighbors)
```

<p align="center">
  <img width="80%" height="100%" src="https://firebasestorage.googleapis.com/v0/b/graph-editor-7e4ef.appspot.com/o/get-neighbors.png?alt=media&token=083ab775-97fc-4387-8ca0-539c73c65676">
</p>

We get the following output:

```
{'C': {}, 'B': {}, 'D': {}}
```

#### Get All Nodes

##### `getNodes()`

Returns all nodes in the graph.

##### Usage

For the following graph and input:

```
g = Graph()
nodes = g.getNodes()
print(nodes)
```

<p align="center">
  <img width="80%" height="100%" src="https://firebasestorage.googleapis.com/v0/b/graph-editor-7e4ef.appspot.com/o/get-neighbors.png?alt=media&token=083ab775-97fc-4387-8ca0-539c73c65676">
</p>

We get the following output:

```
[('A', {}), ('B', {}), ('C', {}), ('D', {})]
```

#### Get All Edges

##### `getEdges()`

Returns all edges in the graph.

##### Usage

For the following graph and input:

```
g = Graph()
edges = g.getEdges()
print(edges)
```

<p align="center">
  <img width="80%" height="100%" src="https://firebasestorage.googleapis.com/v0/b/graph-editor-7e4ef.appspot.com/o/get-neighbors.png?alt=media&token=083ab775-97fc-4387-8ca0-539c73c65676">
</p>

We get the following output:

```
[('A', 'C', {}), ('A', 'B', {}), ('A', 'D', {}), ('B', 'C', {}), ('B', 'D', {})]
```

#### Has Node

##### `hasNode(id)`

Will return `True` if the node with id equal to `id` is in the graph and `False` otherwise.

#### Has Edge

##### `hasNode(source_id, target_id)`

Will return `True` if the node with source id equal to `source_id` and target id equal to `target_id` and `False` otherwise.

## Graph

### Creating Nodes

<p align="center">
  <img width="80%" height="100%" src="https://firebasestorage.googleapis.com/v0/b/graph-editor-7e4ef.appspot.com/o/add-node.gif?alt=media&token=59161335-2fbd-4efb-9166-777f35913823">
</p>

To create a node hold down `SHIFT` and then click on an empty area of the graph as shown above.

### Creating Edges

<p align="center">
  <img width="80%" height="100%" src="https://firebasestorage.googleapis.com/v0/b/graph-editor-7e4ef.appspot.com/o/add-edge.gif?alt=media&token=75ee3e94-896f-42e5-8387-fb2bd61e3914">
</p>

To create an edge between two nodes hold down `SHIFT` and drag from the source node to the target node as shown above.

### Deleting Nodes

<p align="center">
  <img width="80%" height="100%" src="https://firebasestorage.googleapis.com/v0/b/graph-editor-7e4ef.appspot.com/o/delete-node.gif?alt=media&token=3da7d0b8-5ff7-4169-bf9d-0d14dea8e4af">
</p>

To delete nodes `CLICK` on the node you want to delete and press the `DELETE` the key. Edges connected to the deleted node will automatically be deleted as well.

### Deleting Edges

<p align="center">
  <img width="80%" height="100%" src="https://firebasestorage.googleapis.com/v0/b/graph-editor-7e4ef.appspot.com/o/delete-edge.gif?alt=media&token=0a94ca54-16d0-4e89-afeb-4cf42c30dc34">
</p>

To delete edges `CLICK` on the edge you want to delete and press the `DELETE` the key.

## Dependencies

### Styling/Layout

- Rebass: https://rebassjs.org/
- React Splitter: https://github.com/GeoffCox/react-splitter
- Material UI: https://material-ui.com/

### Graph

- React Digraph: https://github.com/uber/react-digraph

### Editor

- Monaco Editor: https://github.com/suren-atoyan/monaco-react

### Python Webworker

- Worker Loader: https://github.com/webpack-contrib/worker-loader
- Pyodide: https://pyodide.org/en/stable/
