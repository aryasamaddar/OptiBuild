// Mock project data
export const projects = [
  {
    id: 1,
    name: "Skyline Tower Complex",
    budget: {
      total: 15000000,
      spent: 8750000,
      projected: 14200000,
      categories: [
        { name: "Labor", allocated: 6000000, spent: 3500000 },
        { name: "Materials", allocated: 7000000, spent: 4200000 },
        { name: "Equipment", allocated: 1500000, spent: 800000 },
        { name: "Others", allocated: 500000, spent: 250000 }
      ],
      recentTransactions: [
        { id: 1, date: "2024-03-15", description: "Steel Delivery", amount: 450000 },
        { id: 2, date: "2024-03-14", description: "Worker Payroll", amount: 380000 },
        { id: 3, date: "2024-03-13", description: "Equipment Rental", amount: 75000 }
      ]
    },
    workforce: {
      total: 450,
      active: 380,
      efficiency: 84,
      teams: [
        { id: 1, name: "Foundation Team", members: 85, lead: "John Smith", efficiency: 88 },
        { id: 2, name: "Structural Team", members: 120, lead: "Maria Garcia", efficiency: 92 },
        { id: 3, name: "Electrical Team", members: 65, lead: "David Chen", efficiency: 86 },
        { id: 4, name: "Plumbing Team", members: 55, lead: "Sarah Johnson", efficiency: 82 }
      ],
      attendance: {
        present: 380,
        absent: 45,
        onLeave: 25
      },
      skills: [
        { name: "Concrete Work", workers: 95 },
        { name: "Steel Work", workers: 75 },
        { name: "Electrical", workers: 65 },
        { name: "Plumbing", workers: 55 }
      ]
    },
    materials: {
      ordered: 892,
      delivered: 654,
      pending: 238,
      inventory: [
        { id: 1, name: "Steel Bars", quantity: 15000, unit: "pcs", status: "In Stock" },
        { id: 2, name: "Cement", quantity: 2500, unit: "bags", status: "Low Stock" },
        { id: 3, name: "Bricks", quantity: 50000, unit: "pcs", status: "In Stock" },
        { id: 4, name: "Electrical Wiring", quantity: 1000, unit: "m", status: "Pending" }
      ],
      recentOrders: [
        { id: 1, date: "2024-03-15", item: "Steel Bars", quantity: 5000, status: "Delivered" },
        { id: 2, date: "2024-03-14", item: "Cement", quantity: 1000, status: "In Transit" },
        { id: 3, date: "2024-03-13", item: "Bricks", quantity: 20000, status: "Pending" }
      ]
    },
    timeline: {
      progress: 58,
      daysLeft: 145,
      totalDays: 365
    }
  },
  {
    id: 2,
    name: "Harbor View Residences",
    budget: {
      total: 12000000,
      spent: 5400000,
      projected: 11800000,
      categories: [
        { name: "Labor", allocated: 4800000, spent: 2160000 },
        { name: "Materials", allocated: 5600000, spent: 2520000 },
        { name: "Equipment", allocated: 1200000, spent: 540000 },
        { name: "Others", allocated: 400000, spent: 180000 }
      ],
      recentTransactions: [
        { id: 1, date: "2024-03-15", description: "Concrete Delivery", amount: 320000 },
        { id: 2, date: "2024-03-14", description: "Worker Payroll", amount: 290000 },
        { id: 3, date: "2024-03-13", description: "Equipment Rental", amount: 65000 }
      ]
    },
    workforce: {
      total: 380,
      active: 320,
      efficiency: 82,
      teams: [
        { id: 1, name: "Foundation Team", members: 70, lead: "Michael Brown", efficiency: 85 },
        { id: 2, name: "Structural Team", members: 100, lead: "Lisa Wong", efficiency: 88 },
        { id: 3, name: "Electrical Team", members: 55, lead: "James Wilson", efficiency: 83 },
        { id: 4, name: "Plumbing Team", members: 45, lead: "Emma Davis", efficiency: 80 }
      ],
      attendance: {
        present: 320,
        absent: 35,
        onLeave: 25
      },
      skills: [
        { name: "Concrete Work", workers: 80 },
        { name: "Steel Work", workers: 65 },
        { name: "Electrical", workers: 55 },
        { name: "Plumbing", workers: 45 }
      ]
    },
    materials: {
      ordered: 745,
      delivered: 520,
      pending: 225,
      inventory: [
        { id: 1, name: "Steel Bars", quantity: 12000, unit: "pcs", status: "In Stock" },
        { id: 2, name: "Cement", quantity: 2000, unit: "bags", status: "In Stock" },
        { id: 3, name: "Bricks", quantity: 40000, unit: "pcs", status: "Low Stock" },
        { id: 4, name: "Electrical Wiring", quantity: 800, unit: "m", status: "Pending" }
      ],
      recentOrders: [
        { id: 1, date: "2024-03-15", item: "Steel Bars", quantity: 4000, status: "Delivered" },
        { id: 2, date: "2024-03-14", item: "Cement", quantity: 800, status: "In Transit" },
        { id: 3, date: "2024-03-13", item: "Bricks", quantity: 15000, status: "Pending" }
      ]
    },
    timeline: {
      progress: 45,
      daysLeft: 200,
      totalDays: 365
    }
  },
  {
    id: 3,
    name: "Green Valley Business Park",
    budget: {
      total: 20000000,
      spent: 9000000,
      projected: 19500000,
      categories: [
        { name: "Labor", allocated: 8000000, spent: 3600000 },
        { name: "Materials", allocated: 9400000, spent: 4230000 },
        { name: "Equipment", allocated: 2000000, spent: 900000 },
        { name: "Others", allocated: 600000, spent: 270000 }
      ],
      recentTransactions: [
        { id: 1, date: "2024-03-15", description: "Glass Panels", amount: 580000 },
        { id: 2, date: "2024-03-14", description: "Worker Payroll", amount: 420000 },
        { id: 3, date: "2024-03-13", description: "Equipment Rental", amount: 95000 }
      ]
    },
    workforce: {
      total: 520,
      active: 460,
      efficiency: 88,
      teams: [
        { id: 1, name: "Foundation Team", members: 100, lead: "Robert Taylor", efficiency: 90 },
        { id: 2, name: "Structural Team", members: 140, lead: "Anna Martinez", efficiency: 92 },
        { id: 3, name: "Electrical Team", members: 75, lead: "William Lee", efficiency: 87 },
        { id: 4, name: "Plumbing Team", members: 65, lead: "Sophie Anderson", efficiency: 85 }
      ],
      attendance: {
        present: 460,
        absent: 35,
        onLeave: 25
      },
      skills: [
        { name: "Concrete Work", workers: 110 },
        { name: "Steel Work", workers: 85 },
        { name: "Electrical", workers: 75 },
        { name: "Plumbing", workers: 65 }
      ]
    },
    materials: {
      ordered: 1250,
      delivered: 875,
      pending: 375,
      inventory: [
        { id: 1, name: "Steel Bars", quantity: 25000, unit: "pcs", status: "In Stock" },
        { id: 2, name: "Cement", quantity: 3500, unit: "bags", status: "In Stock" },
        { id: 3, name: "Glass Panels", quantity: 500, unit: "pcs", status: "Low Stock" },
        { id: 4, name: "Electrical Wiring", quantity: 2000, unit: "m", status: "In Stock" }
      ],
      recentOrders: [
        { id: 1, date: "2024-03-15", item: "Glass Panels", quantity: 200, status: "Delivered" },
        { id: 2, date: "2024-03-14", item: "Steel Bars", quantity: 8000, status: "In Transit" },
        { id: 3, date: "2024-03-13", item: "Cement", quantity: 1000, status: "Pending" }
      ]
    },
    timeline: {
      progress: 45,
      daysLeft: 200,
      totalDays: 365
    }
  }
];

export const getProject = (id: number) => {
  return projects.find(project => project.id === id) || projects[0];
};