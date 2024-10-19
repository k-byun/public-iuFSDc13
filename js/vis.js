// Create an array of nodes with size and border thickness differentiation
let nodes = new vis.DataSet([
  { id: "iuFSD", label: "iuFSD", size: 40, borderWidth: 5 }, // grandparent node (larger and thick border)
  { id: "FE", label: "FE", size: 30, borderWidth: 3 }, // parent nodes (medium size and medium border)
  { id: "BE", label: "BE", size: 30, borderWidth: 3 },
  { id: "UX/UI", label: "UX/UI", size: 30, borderWidth: 3 },
  { id: "DevOps", label: "DevOps", size: 30, borderWidth: 3 },
]);

// Create an array of edges
let edges = new vis.DataSet([
  { from: "iuFSD", to: "FE" },
  { from: "iuFSD", to: "BE" },
  { from: "iuFSD", to: "UX/UI" },
  { from: "iuFSD", to: "DevOps" },
]);

// Initialize network
let container = document.getElementById("network");
let data = {
  nodes: nodes,
  edges: edges,
};
let options = {
  physics: {
    enabled: true,
    solver: "forceAtlas2Based",
    forceAtlas2Based: {
      gravitationalConstant: -50,
      springConstant: 0.1,
      avoidOverlap: 1,
    },
    stabilization: {
      enabled: true,
      iterations: 1000,
      updateInterval: 25,
    },
  },
  nodes: {
    shape: "dot",
  },
};

let network = new vis.Network(container, data, options);

// Track expanded state
let expandedNodes = {};

// Node child data
let children = {
  FE: [
    { id: "React", label: "React", size: 20, borderWidth: 1 }, // child nodes (smaller and thin border)
    { id: "Flutter", label: "Flutter", size: 20, borderWidth: 1 },
    { id: "Angular", label: "Angular", size: 20, borderWidth: 1 },
    { id: "JavaScript", label: "JavaScript", size: 20, borderWidth: 1 },
    { id: "HTML5", label: "HTML5", size: 20, borderWidth: 1 },
    { id: "CSS", label: "CSS", size: 20, borderWidth: 1 },
    { id: "NPM", label: "NPM", size: 20, borderWidth: 1 },
    { id: "TypeScript", label: "TypeScript", size: 20, borderWidth: 1 },
    { id: "Tailwind CSS", label: "Tailwind CSS", size: 20, borderWidth: 1 },
    { id: "Bootstrap", label: "Bootstrap", size: 20, borderWidth: 1 },
  ],
  BE: [
    { id: "node.js", label: "node.js", size: 20, borderWidth: 1 },
    { id: "Django", label: "Django", size: 20, borderWidth: 1 },
    { id: "MongoDB", label: "MongoDB", size: 20, borderWidth: 1 },
    { id: "Flask", label: "Flask", size: 20, borderWidth: 1 },
    { id: "C#", label: "C#", size: 20, borderWidth: 1 },
    { id: "Kotlin", label: "Kotlin", size: 20, borderWidth: 1 },
    { id: "ASP.NET Core", label: "ASP.NET Core", size: 20, borderWidth: 1 },
    { id: "Go", label: "Go", size: 20, borderWidth: 1 },
    { id: "APIs", label: "APIs", size: 20, borderWidth: 1 },
  ],
  "UX/UI": [
    { id: "Figma", label: "Figma", size: 20, borderWidth: 1 },
    { id: "Sketch", label: "Sketch", size: 20, borderWidth: 1 },
  ],
  DevOps: [
    { id: "Redis", label: "Redis", size: 20, borderWidth: 1 },
    { id: "JWT", label: "JWT", size: 20, borderWidth: 1 },
    { id: "GitHub Actions", label: "GitHub Actions", size: 20, borderWidth: 1 },
    {
      id: "Ansible",
      label: "Ansible / Chef / Puppet",
      size: 20,
      borderWidth: 1,
    },
    { id: "K8S", label: "K8S", size: 20, borderWidth: 1 },
    { id: "Azure CI/CD", label: "Azure CI/CD", size: 20, borderWidth: 1 },
    {
      id: "GCP administration",
      label: "GCP administration",
      size: 20,
      borderWidth: 1,
    },
    { id: "Monitoring", label: "Monitoring", size: 20, borderWidth: 1 },
  ],
};

// Function to check if an edge already exists
function edgeExists(from, to) {
  let existingEdges = edges.get();
  return existingEdges.some((edge) => edge.from === from && edge.to === to);
}

// Function to add or remove children
function toggleChildren(nodeId) {
  if (expandedNodes[nodeId]) {
    // If node is expanded, remove its children
    children[nodeId].forEach((child) => {
      nodes.remove({ id: child.id });
    });
    delete expandedNodes[nodeId];
  } else {
    // If node is collapsed, add its children
    children[nodeId].forEach((child) => {
      if (!nodes.get(child.id)) {
        // Only add the child node if it doesn't already exist
        nodes.add(child);
      }
      // Check if the edge already exists
      if (!edgeExists(nodeId, child.id)) {
        edges.add({ from: nodeId, to: child.id });
      }
    });
    expandedNodes[nodeId] = true;
  }
}

// Add event listener for node clicks
network.on("click", function (params) {
  if (params.nodes.length === 1) {
    let nodeId = params.nodes[0];
    if (children[nodeId]) {
      toggleChildren(nodeId);
    }
  }
});
