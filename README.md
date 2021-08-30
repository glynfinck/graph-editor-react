# Graph Editor Documentation

This documents how to perform different actions on the `Graph()` Python class used for developing our algorithms.

## Table of Contents

1. [Editor](#editor)
   - [Graph Class](#graph-class)
     - [Parameters](#constructor)
     - [Methods](#methods)
2. [Graph](#graph)
   - [Creating Nodes](#creating-nodes)
   - [Creating Edges](#creating-edges)
   - [Deleting Nodes](#deleting-nodes)
   - [Deleting Edges](#deleting-edges)

## Editor

### Graph Class

#### Activate Node

##### `self.activateNode(id)`

Activating a node will turn its color to green. This can be used to track vistited nodes as you progress throughout your algorithm.

##### Usage

To activate the node with id "A" we would use the following command:

```
g.activateNode("A")
```

Producing the following result in our graph:

![activated node](https://firebasestorage.googleapis.com/v0/b/graph-editor-7e4ef.appspot.com/o/activated-node.png?alt=media&token=030b3951-e8c6-4167-b2c2-87ad742248be)

#### Activate Edge (`activateEdge(id)`)

##### `self.activateEdge(source_id, target_id)`

Activating a edge will turn its color to green. This can be used to track vistited edges as you progress throughout your algorithm.

##### Usage

To activate the edge with a source node id of "A" and a target node id of "B" we would use the following command:

```
g.activateEdge("A", "B")
```

Producing the following result in our graph:

![activated edge](https://firebasestorage.googleapis.com/v0/b/graph-editor-7e4ef.appspot.com/o/activated-edge.png?alt=media&token=517238df-9d91-4a6c-a351-1a4724804d59)

#### Get Neighbors of a Node

##### `getNeighbors(id)`

This

#### Get All Nodes

#### Get All Edges

## Graph
