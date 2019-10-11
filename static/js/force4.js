// This is adapted from https://bl.ocks.org/mbostock/2675ff61ea5e063ede2b5d63c08020c7

var data4 = {"directed": false, "multigraph": false, "graph": {}, "nodes": [{"betweenness": 0.11661807580174927, "class": 0, "id": "reactor_OP"}, {"betweenness": 4.868804664723033, "class": 0, "id": "plant_manager"}, {"betweenness": 0.0, "class": 0, "id": "auxiliary_building_assistant"}, {"betweenness": 5.1379980563654035, "class": 2, "id": "engineers_unspec"}, {"betweenness": 1.1914480077745384, "class": 0, "id": "s_reactor_operator"}, {"betweenness": 18.657920310981538, "class": 0, "id": "CR_supervisor"}, {"betweenness": 0.0, "class": 0, "id": "physician"}, {"betweenness": 0.0, "class": 0, "id": "mechanic_unspec"}, {"betweenness": 56.4567541302235, "class": 0, "id": "shift_supervisor"}, {"betweenness": 0.4988662131519275, "class": 0, "id": "contractor_nonlicensed"}, {"betweenness": 0.0, "class": 0, "id": "operator_trainee_unspec"}, {"betweenness": 0.0, "class": 0, "id": "maintenance_sup"}, {"betweenness": 0.0, "class": 0, "id": "reactor_ENG"}, {"betweenness": 0.0, "class": 0, "id": "util_OP"}, {"betweenness": 122.83219954648527, "class": 3, "id": "operators_unspec"}, {"betweenness": 15.011337868480727, "class": 0, "id": "supervisor"}, {"betweenness": 0.0, "class": 0, "id": "CR_shift_supervisor"}, {"betweenness": 0.0, "class": 0, "id": "system_design_ENG"}, {"betweenness": 27.003563330093947, "class": 3, "id": "operator_unspec"}, {"betweenness": 0.0, "class": 0, "id": "fire_watch_staff"}, {"betweenness": 0.0, "class": 0, "id": "mechanics_unspec"}, {"betweenness": 0.0, "class": 0, "id": "quality_control"}, {"betweenness": 29.050534499514093, "class": 2, "id": "engineer_unspec"}, {"betweenness": 0.0, "class": 0, "id": "i_and_c_tech"}, {"betweenness": 0.0, "class": 0, "id": "transmission_system_OP"}, {"betweenness": 1.8626498218334953, "class": 0, "id": "assistant_shift_sup"}, {"betweenness": 2.078717201166181, "class": 0, "id": "technician_unspec"}, {"betweenness": 0.0, "class": 0, "id": "analysts_unspec"}, {"betweenness": 0.0, "class": 0, "id": "operations_sup"}, {"betweenness": 1.1039844509232266, "class": 0, "id": "shift_technical_advisor"}, {"betweenness": 0.0, "class": 0, "id": "independent_system_OP"}, {"betweenness": 0.0, "class": 0, "id": "outage_manager"}, {"betweenness": 0.0, "class": 0, "id": "worker_unspec"}, {"betweenness": 0.0, "class": 0, "id": "procedure_writer"}, {"betweenness": 2.3663751214771627, "class": 1, "id": "control_room_sup"}, {"betweenness": 0.0, "class": 0, "id": "fire_shift_CPT"}, {"betweenness": 0.0, "class": 0, "id": "radiation_protection_tech"}, {"betweenness": 0.0, "class": 0, "id": "fire_watch_sup"}, {"betweenness": 0.0, "class": 0, "id": "team_lead"}, {"betweenness": 6.021379980563654, "class": 0, "id": "licensed_OP"}, {"betweenness": 35.15225137674118, "class": 0, "id": "control_room_OP"}, {"betweenness": 0.0, "class": 0, "id": "chem_tech"}, {"betweenness": 7.721088435374149, "class": 4, "id": "tech_unspec"}, {"betweenness": 0.46647230320699706, "class": 0, "id": "electrician"}, {"betweenness": 0.0, "class": 0, "id": "Work_control_supervisor"}, {"betweenness": 7.8943958535795264, "class": 0, "id": "operations_manager"}, {"betweenness": 50.52964042759962, "class": 1, "id": "supervisor_unspec"}, {"betweenness": 0.0, "class": 0, "id": "rp_tech"}, {"betweenness": 11.904761904761903, "class": 0, "id": "maintenance_WKR"}, {"betweenness": 1.9135082604470366, "class": 1, "id": "shift_manager"}, {"betweenness": 0.7709750566893424, "class": 0, "id": "resident_inspector"}], "links": [{"weight": 1, "source": "reactor_OP", "target": "control_room_sup"}, {"weight": 1, "source": "reactor_OP", "target": "CR_supervisor"}, {"weight": 1, "source": "reactor_OP", "target": "shift_supervisor"}, {"weight": 1, "source": "reactor_OP", "target": "operators_unspec"}, {"weight": 3, "source": "plant_manager", "target": "operations_manager"}, {"weight": 2, "source": "plant_manager", "target": "supervisor"}, {"weight": 1, "source": "plant_manager", "target": "shift_supervisor"}, {"weight": 2, "source": "plant_manager", "target": "assistant_shift_sup"}, {"weight": 31, "source": "plant_manager", "target": "resident_inspector"}, {"weight": 2, "source": "engineers_unspec", "target": "operators_unspec"}, {"weight": 1, "source": "engineers_unspec", "target": "engineer_unspec"}, {"weight": 1, "source": "engineers_unspec", "target": "tech_unspec"}, {"weight": 1, "source": "engineers_unspec", "target": "technician_unspec"}, {"weight": 1, "source": "engineers_unspec", "target": "supervisor_unspec"}, {"weight": 1, "source": "engineers_unspec", "target": "control_room_OP"}, {"weight": 1, "source": "engineers_unspec", "target": "operator_unspec"}, {"weight": 1, "source": "engineers_unspec", "target": "supervisor"}, {"weight": 1, "source": "engineers_unspec", "target": "electrician"}, {"weight": 3, "source": "s_reactor_operator", "target": "CR_supervisor"}, {"weight": 2, "source": "s_reactor_operator", "target": "shift_supervisor"}, {"weight": 3, "source": "s_reactor_operator", "target": "operator_unspec"}, {"weight": 1, "source": "s_reactor_operator", "target": "engineer_unspec"}, {"weight": 1, "source": "s_reactor_operator", "target": "shift_manager"}, {"weight": 1, "source": "s_reactor_operator", "target": "control_room_sup"}, {"weight": 1, "source": "CR_supervisor", "target": "licensed_OP"}, {"weight": 3, "source": "CR_supervisor", "target": "operator_unspec"}, {"weight": 1, "source": "CR_supervisor", "target": "shift_supervisor"}, {"weight": 1, "source": "CR_supervisor", "target": "operations_sup"}, {"weight": 1, "source": "CR_supervisor", "target": "operations_manager"}, {"weight": 2, "source": "CR_supervisor", "target": "operators_unspec"}, {"weight": 1, "source": "CR_supervisor", "target": "control_room_OP"}, {"weight": 2, "source": "CR_supervisor", "target": "shift_manager"}, {"weight": 1, "source": "CR_supervisor", "target": "supervisor_unspec"}, {"weight": 1, "source": "CR_supervisor", "target": "tech_unspec"}, {"weight": 1, "source": "CR_supervisor", "target": "shift_technical_advisor"}, {"weight": 4, "source": "shift_supervisor", "target": "supervisor_unspec"}, {"weight": 1, "source": "shift_supervisor", "target": "operations_manager"}, {"weight": 1, "source": "shift_supervisor", "target": "engineer_unspec"}, {"weight": 3, "source": "shift_supervisor", "target": "operator_unspec"}, {"weight": 3, "source": "shift_supervisor", "target": "control_room_OP"}, {"weight": 1, "source": "shift_supervisor", "target": "shift_supervisor"}, {"weight": 5, "source": "shift_supervisor", "target": "control_room_sup"}, {"weight": 2, "source": "shift_supervisor", "target": "operators_unspec"}, {"weight": 3, "source": "shift_supervisor", "target": "shift_technical_advisor"}, {"weight": 2, "source": "shift_supervisor", "target": "licensed_OP"}, {"weight": 2, "source": "shift_supervisor", "target": "technician_unspec"}, {"weight": 1, "source": "shift_supervisor", "target": "quality_control"}, {"weight": 2, "source": "shift_supervisor", "target": "electrician"}, {"weight": 2, "source": "contractor_nonlicensed", "target": "maintenance_WKR"}, {"weight": 1, "source": "contractor_nonlicensed", "target": "supervisor"}, {"weight": 2, "source": "operator_trainee_unspec", "target": "licensed_OP"}, {"weight": 5, "source": "operator_trainee_unspec", "target": "control_room_OP"}, {"weight": 1, "source": "maintenance_sup", "target": "operators_unspec"}, {"weight": 1, "source": "reactor_ENG", "target": "operators_unspec"}, {"weight": 3, "source": "operators_unspec", "target": "control_room_sup"}, {"weight": 1, "source": "operators_unspec", "target": "resident_inspector"}, {"weight": 10, "source": "operators_unspec", "target": "operators_unspec"}, {"weight": 28, "source": "operators_unspec", "target": "operator_unspec"}, {"weight": 1, "source": "operators_unspec", "target": "technician_unspec"}, {"weight": 1, "source": "operators_unspec", "target": "supervisor_unspec"}, {"weight": 3, "source": "operators_unspec", "target": "operations_manager"}, {"weight": 3, "source": "operators_unspec", "target": "tech_unspec"}, {"weight": 3, "source": "operators_unspec", "target": "maintenance_WKR"}, {"weight": 1, "source": "operators_unspec", "target": "operations_sup"}, {"weight": 1, "source": "operators_unspec", "target": "shift_technical_advisor"}, {"weight": 3, "source": "operators_unspec", "target": "control_room_OP"}, {"weight": 1, "source": "operators_unspec", "target": "licensed_OP"}, {"weight": 1, "source": "operators_unspec", "target": "engineer_unspec"}, {"weight": 4, "source": "operators_unspec", "target": "supervisor"}, {"weight": 1, "source": "operators_unspec", "target": "electrician"}, {"weight": 1, "source": "operators_unspec", "target": "shift_manager"}, {"weight": 2, "source": "supervisor", "target": "operations_manager"}, {"weight": 1, "source": "supervisor", "target": "tech_unspec"}, {"weight": 1, "source": "CR_shift_supervisor", "target": "fire_watch_staff"}, {"weight": 18, "source": "operator_unspec", "target": "operator_unspec"}, {"weight": 3, "source": "operator_unspec", "target": "licensed_OP"}, {"weight": 1, "source": "operator_unspec", "target": "technician_unspec"}, {"weight": 1, "source": "operator_unspec", "target": "assistant_shift_sup"}, {"weight": 2, "source": "operator_unspec", "target": "shift_manager"}, {"weight": 3, "source": "operator_unspec", "target": "control_room_OP"}, {"weight": 6, "source": "operator_unspec", "target": "supervisor_unspec"}, {"weight": 3, "source": "operator_unspec", "target": "control_room_sup"}, {"weight": 1, "source": "operator_unspec", "target": "engineer_unspec"}, {"weight": 1, "source": "operator_unspec", "target": "shift_technical_advisor"}, {"weight": 1, "source": "operator_unspec", "target": "maintenance_WKR"}, {"weight": 8, "source": "engineer_unspec", "target": "engineer_unspec"}, {"weight": 1, "source": "engineer_unspec", "target": "supervisor_unspec"}, {"weight": 1, "source": "engineer_unspec", "target": "tech_unspec"}, {"weight": 1, "source": "engineer_unspec", "target": "procedure_writer"}, {"weight": 1, "source": "engineer_unspec", "target": "shift_manager"}, {"weight": 2, "source": "engineer_unspec", "target": "technician_unspec"}, {"weight": 2, "source": "engineer_unspec", "target": "control_room_OP"}, {"weight": 1, "source": "assistant_shift_sup", "target": "operations_manager"}, {"weight": 2, "source": "assistant_shift_sup", "target": "control_room_OP"}, {"weight": 1, "source": "assistant_shift_sup", "target": "assistant_shift_sup"}, {"weight": 2, "source": "technician_unspec", "target": "supervisor_unspec"}, {"weight": 2, "source": "technician_unspec", "target": "tech_unspec"}, {"weight": 1, "source": "technician_unspec", "target": "control_room_OP"}, {"weight": 1, "source": "technician_unspec", "target": "technician_unspec"}, {"weight": 1, "source": "technician_unspec", "target": "shift_technical_advisor"}, {"weight": 1, "source": "operations_sup", "target": "operations_manager"}, {"weight": 1, "source": "shift_technical_advisor", "target": "control_room_sup"}, {"weight": 3, "source": "shift_technical_advisor", "target": "shift_manager"}, {"weight": 2, "source": "worker_unspec", "target": "supervisor_unspec"}, {"weight": 1, "source": "control_room_sup", "target": "control_room_OP"}, {"weight": 1, "source": "fire_shift_CPT", "target": "supervisor_unspec"}, {"weight": 1, "source": "licensed_OP", "target": "control_room_OP"}, {"weight": 5, "source": "control_room_OP", "target": "tech_unspec"}, {"weight": 4, "source": "control_room_OP", "target": "supervisor_unspec"}, {"weight": 1, "source": "control_room_OP", "target": "control_room_OP"}, {"weight": 1, "source": "control_room_OP", "target": "maintenance_WKR"}, {"weight": 6, "source": "tech_unspec", "target": "supervisor_unspec"}, {"weight": 3, "source": "tech_unspec", "target": "tech_unspec"}, {"weight": 1, "source": "tech_unspec", "target": "electrician"}, {"weight": 3, "source": "tech_unspec", "target": "shift_manager"}, {"weight": 1, "source": "electrician", "target": "supervisor_unspec"}, {"weight": 2, "source": "supervisor_unspec", "target": "supervisor_unspec"}, {"weight": 1, "source": "maintenance_WKR", "target": "maintenance_WKR"}]}


var svg4 = d3.select("#svg4"),
    width = +svg4.attr("width"),
    height = +svg4.attr("height");

var simulation4 = d3.forceSimulation(svg4)
    .force("link", d3.forceLink().id(function (d) {
        return d.id;
    }))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2));

d3.json(data4, function (error, graph4) {
    if (error == true) throw error;

    graph4 = data4;

    var link = svg4.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(graph4.links)
        .enter().append("line");

    var node = svg4.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(graph4.nodes)
        .enter().append("circle")
        .style("fill", function(d) {
        if (d.class == 1)
        return '#d64b24';
        else if (d.class == 2)
        return '#4b9b23';
        else if (d.class == 3)
        return '#c03bb7';
        else if (d.class == 4)
        return '#46212d';
        else
        return '#008bff';
  })
        .attr("r", function(d) {
        if (d.betweenness >= 20 ){return 15}
        else if (d.betweenness < 20 && d.betweenness >= 16) {return 12}
        else if (d.betweenness < 16 && d.betweenness > 9) {return 10}
        else return d.betweenness + 1.0;
  })
        .call(d3.drag()
            .on("start", dragstarted4)
            .on("drag", dragged4)
            .on("end", dragended4));

    node.append("title")
        .text(function (d) {
            return d.id;
        });

    simulation4
        .nodes(graph4.nodes)
        .on("tick", ticked);

    simulation4.force("link")
        .links(graph4.links);

    function ticked() {
        link
            .attr("x1", function (d) {
                return d.source.x;
            })
            .attr("y1", function (d) {
                return d.source.y;
            })
            .attr("x2", function (d) {
                return d.target.x;
            })
            .attr("y2", function (d) {
                return d.target.y;
            });

        node
            .attr("cx", function (d) {
                return d.x;
            })
            .attr("cy", function (d) {
                return d.y;
            });
    }
});

function dragstarted4(d) {
    if (!d3.event.active) simulation4.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged4(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}

function dragended4(d) {
    if (!d3.event.active) simulation4.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}
