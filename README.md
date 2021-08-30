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

#### Activate Edge (`activateEdge(id)`)

##### `self.activateEdge(source_id, target_id)`

Activating a edge will turn its color to green. This can be used to track vistited edges as you progress throughout your algorithm.

##### Usage

To activate the edge with a source node id of "A" and a target node id of "B" we would use the following command:

```
g.activateEdge("A", "B")
```

#### Get Neighbors of a Node (`getNeighbors(id)`)

This method

#### Get All Nodes

#### Get All Edges

## Graph
