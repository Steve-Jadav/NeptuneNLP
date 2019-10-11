//// This is adapted from https://bl.ocks.org/mbostock/2675ff61ea5e063ede2b5d63c08020c7

var data2 = {"directed": false, "multigraph": false, "graph": {}, "nodes": [{"betweenness": 0.0, "class": 0, "id": "reactor_OP"}, {"betweenness": 0.0, "class": 0, "id": "plant_manager"}, {"betweenness": 1.2857142857142856, "class": 0, "id": "auxiliary_building_assistant"}, {"betweenness": 6.770651117589892, "class": 2, "id": "engineers_unspec"}, {"betweenness": 5.961800104657246, "class": 0, "id": "s_reactor_operator"}, {"betweenness": 0.0, "class": 0, "id": "CR_supervisor"}, {"betweenness": 0.0, "class": 0, "id": "physician"}, {"betweenness": 0.0, "class": 0, "id": "mechanic_unspec"}, {"betweenness": 33.517978620019434, "class": 0, "id": "shift_supervisor"}, {"betweenness": 0.27210884353741494, "class": 0, "id": "contractor_nonlicensed"}, {"betweenness": 0.0, "class": 0, "id": "operator_trainee_unspec"}, {"betweenness": 0.0, "class": 0, "id": "maintenance_sup"}, {"betweenness": 28.571428571428573, "class": 0, "id": "reactor_ENG"}, {"betweenness": 0.0, "class": 0, "id": "util_OP"}, {"betweenness": 97.62540407438365, "class": 3, "id": "operators_unspec"}, {"betweenness": 7.51597608740466, "class": 0, "id": "supervisor"}, {"betweenness": 0.0, "class": 0, "id": "CR_shift_supervisor"}, {"betweenness": 0.0, "class": 0, "id": "system_design_ENG"}, {"betweenness": 105.43847988745948, "class": 3, "id": "operator_unspec"}, {"betweenness": 0.0, "class": 0, "id": "fire_watch_staff"}, {"betweenness": 0.0, "class": 0, "id": "mechanics_unspec"}, {"betweenness": 0.0, "class": 0, "id": "quality_control"}, {"betweenness": 20.298649196608384, "class": 2, "id": "engineer_unspec"}, {"betweenness": 0.0, "class": 0, "id": "i_and_c_tech"}, {"betweenness": 0.0, "class": 0, "id": "transmission_system_OP"}, {"betweenness": 79.72273304926364, "class": 0, "id": "assistant_shift_sup"}, {"betweenness": 35.57337220602526, "class": 0, "id": "technician_unspec"}, {"betweenness": 0.0, "class": 0, "id": "analysts_unspec"}, {"betweenness": 0.0, "class": 0, "id": "operations_sup"}, {"betweenness": 5.19047619047619, "class": 0, "id": "shift_technical_advisor"}, {"betweenness": 0.0, "class": 0, "id": "independent_system_OP"}, {"betweenness": 0.0, "class": 0, "id": "outage_manager"}, {"betweenness": 0.0, "class": 0, "id": "worker_unspec"}, {"betweenness": 0.0, "class": 0, "id": "procedure_writer"}, {"betweenness": 0.0, "class": 1, "id": "control_room_sup"}, {"betweenness": 0.0, "class": 0, "id": "fire_shift_CPT"}, {"betweenness": 0.0, "class": 0, "id": "radiation_protection_tech"}, {"betweenness": 0.0, "class": 0, "id": "fire_watch_sup"}, {"betweenness": 0.9329446064139941, "class": 0, "id": "team_lead"}, {"betweenness": 31.21000088347027, "class": 0, "id": "licensed_OP"}, {"betweenness": 50.022129797640005, "class": 0, "id": "control_room_OP"}, {"betweenness": 0.0, "class": 0, "id": "chem_tech"}, {"betweenness": 26.002410288124587, "class": 4, "id": "tech_unspec"}, {"betweenness": 4.504638218923933, "class": 0, "id": "electrician"}, {"betweenness": 0.0, "class": 0, "id": "Work_control_supervisor"}, {"betweenness": 0.0, "class": 0, "id": "operations_manager"}, {"betweenness": 130.01653448592225, "class": 1, "id": "supervisor_unspec"}, {"betweenness": 0.0, "class": 0, "id": "rp_tech"}, {"betweenness": 61.9922254616132, "class": 0, "id": "maintenance_WKR"}, {"betweenness": 17.778425655976676, "class": 1, "id": "shift_manager"}, {"betweenness": 0.0, "class": 0, "id": "resident_inspector"}], "links": [{"weight": 1, "source": "reactor_OP", "target": "reactor_OP"}, {"weight": 1, "source": "reactor_OP", "target": "licensed_OP"}, {"weight": 1, "source": "auxiliary_building_assistant", "target": "operator_unspec"}, {"weight": 1, "source": "auxiliary_building_assistant", "target": "maintenance_WKR"}, {"weight": 2, "source": "engineers_unspec", "target": "maintenance_WKR"}, {"weight": 1, "source": "engineers_unspec", "target": "operator_unspec"}, {"weight": 3, "source": "engineers_unspec", "target": "operators_unspec"}, {"weight": 1, "source": "engineers_unspec", "target": "shift_manager"}, {"weight": 2, "source": "engineers_unspec", "target": "supervisor"}, {"weight": 3, "source": "engineers_unspec", "target": "engineers_unspec"}, {"weight": 1, "source": "engineers_unspec", "target": "tech_unspec"}, {"weight": 1, "source": "engineers_unspec", "target": "s_reactor_operator"}, {"weight": 2, "source": "engineers_unspec", "target": "engineer_unspec"}, {"weight": 1, "source": "s_reactor_operator", "target": "supervisor_unspec"}, {"weight": 2, "source": "s_reactor_operator", "target": "operators_unspec"}, {"weight": 2, "source": "s_reactor_operator", "target": "control_room_OP"}, {"weight": 2, "source": "s_reactor_operator", "target": "shift_manager"}, {"weight": 1, "source": "s_reactor_operator", "target": "technician_unspec"}, {"weight": 2, "source": "s_reactor_operator", "target": "operator_unspec"}, {"weight": 1, "source": "s_reactor_operator", "target": "s_reactor_operator"}, {"weight": 1, "source": "s_reactor_operator", "target": "tech_unspec"}, {"weight": 1, "source": "CR_supervisor", "target": "supervisor_unspec"}, {"weight": 1, "source": "CR_supervisor", "target": "operator_unspec"}, {"weight": 1, "source": "physician", "target": "technician_unspec"}, {"weight": 1, "source": "mechanic_unspec", "target": "reactor_ENG"}, {"weight": 2, "source": "shift_supervisor", "target": "shift_manager"}, {"weight": 4, "source": "shift_supervisor", "target": "operator_unspec"}, {"weight": 1, "source": "shift_supervisor", "target": "worker_unspec"}, {"weight": 1, "source": "shift_supervisor", "target": "engineer_unspec"}, {"weight": 2, "source": "shift_supervisor", "target": "fire_watch_staff"}, {"weight": 1, "source": "shift_supervisor", "target": "operators_unspec"}, {"weight": 1, "source": "shift_supervisor", "target": "tech_unspec"}, {"weight": 1, "source": "shift_supervisor", "target": "shift_supervisor"}, {"weight": 1, "source": "contractor_nonlicensed", "target": "supervisor"}, {"weight": 1, "source": "contractor_nonlicensed", "target": "tech_unspec"}, {"weight": 1, "source": "contractor_nonlicensed", "target": "electrician"}, {"weight": 1, "source": "reactor_ENG", "target": "maintenance_WKR"}, {"weight": 1, "source": "util_OP", "target": "supervisor_unspec"}, {"weight": 5, "source": "operators_unspec", "target": "operators_unspec"}, {"weight": 34, "source": "operators_unspec", "target": "operator_unspec"}, {"weight": 3, "source": "operators_unspec", "target": "maintenance_WKR"}, {"weight": 2, "source": "operators_unspec", "target": "assistant_shift_sup"}, {"weight": 2, "source": "operators_unspec", "target": "tech_unspec"}, {"weight": 2, "source": "operators_unspec", "target": "licensed_OP"}, {"weight": 1, "source": "operators_unspec", "target": "fire_watch_staff"}, {"weight": 2, "source": "operators_unspec", "target": "supervisor"}, {"weight": 1, "source": "operators_unspec", "target": "technician_unspec"}, {"weight": 2, "source": "operators_unspec", "target": "control_room_OP"}, {"weight": 3, "source": "operators_unspec", "target": "shift_technical_advisor"}, {"weight": 1, "source": "operators_unspec", "target": "operations_manager"}, {"weight": 2, "source": "operators_unspec", "target": "supervisor_unspec"}, {"weight": 1, "source": "operators_unspec", "target": "shift_manager"}, {"weight": 1, "source": "supervisor", "target": "operator_unspec"}, {"weight": 1, "source": "supervisor", "target": "licensed_OP"}, {"weight": 5, "source": "supervisor", "target": "tech_unspec"}, {"weight": 1, "source": "CR_shift_supervisor", "target": "shift_technical_advisor"}, {"weight": 1, "source": "CR_shift_supervisor", "target": "operator_unspec"}, {"weight": 17, "source": "operator_unspec", "target": "assistant_shift_sup"}, {"weight": 37, "source": "operator_unspec", "target": "operator_unspec"}, {"weight": 1, "source": "operator_unspec", "target": "shift_technical_advisor"}, {"weight": 4, "source": "operator_unspec", "target": "shift_manager"}, {"weight": 22, "source": "operator_unspec", "target": "control_room_OP"}, {"weight": 4, "source": "operator_unspec", "target": "supervisor_unspec"}, {"weight": 1, "source": "operator_unspec", "target": "tech_unspec"}, {"weight": 1, "source": "operator_unspec", "target": "licensed_OP"}, {"weight": 1, "source": "operator_unspec", "target": "quality_control"}, {"weight": 1, "source": "operator_unspec", "target": "electrician"}, {"weight": 2, "source": "fire_watch_staff", "target": "fire_watch_staff"}, {"weight": 1, "source": "engineer_unspec", "target": "maintenance_WKR"}, {"weight": 1, "source": "engineer_unspec", "target": "control_room_OP"}, {"weight": 2, "source": "engineer_unspec", "target": "tech_unspec"}, {"weight": 1, "source": "engineer_unspec", "target": "shift_technical_advisor"}, {"weight": 3, "source": "engineer_unspec", "target": "supervisor_unspec"}, {"weight": 2, "source": "engineer_unspec", "target": "engineer_unspec"}, {"weight": 1, "source": "engineer_unspec", "target": "assistant_shift_sup"}, {"weight": 1, "source": "engineer_unspec", "target": "electrician"}, {"weight": 1, "source": "assistant_shift_sup", "target": "outage_manager"}, {"weight": 7, "source": "assistant_shift_sup", "target": "supervisor_unspec"}, {"weight": 2, "source": "assistant_shift_sup", "target": "licensed_OP"}, {"weight": 1, "source": "assistant_shift_sup", "target": "control_room_OP"}, {"weight": 1, "source": "assistant_shift_sup", "target": "shift_manager"}, {"weight": 2, "source": "assistant_shift_sup", "target": "procedure_writer"}, {"weight": 7, "source": "assistant_shift_sup", "target": "team_lead"}, {"weight": 3, "source": "assistant_shift_sup", "target": "technician_unspec"}, {"weight": 1, "source": "technician_unspec", "target": "supervisor_unspec"}, {"weight": 2, "source": "technician_unspec", "target": "technician_unspec"}, {"weight": 3, "source": "technician_unspec", "target": "team_lead"}, {"weight": 1, "source": "operations_sup", "target": "supervisor_unspec"}, {"weight": 1, "source": "shift_technical_advisor", "target": "shift_manager"}, {"weight": 5, "source": "shift_technical_advisor", "target": "control_room_OP"}, {"weight": 2, "source": "procedure_writer", "target": "team_lead"}, {"weight": 1, "source": "radiation_protection_tech", "target": "supervisor_unspec"}, {"weight": 2, "source": "licensed_OP", "target": "supervisor_unspec"}, {"weight": 1, "source": "licensed_OP", "target": "control_room_OP"}, {"weight": 5, "source": "control_room_OP", "target": "maintenance_WKR"}, {"weight": 1, "source": "control_room_OP", "target": "tech_unspec"}, {"weight": 2, "source": "control_room_OP", "target": "shift_manager"}, {"weight": 1, "source": "control_room_OP", "target": "electrician"}, {"weight": 1, "source": "control_room_OP", "target": "supervisor_unspec"}, {"weight": 1, "source": "control_room_OP", "target": "control_room_OP"}, {"weight": 1, "source": "control_room_OP", "target": "chem_tech"}, {"weight": 1, "source": "tech_unspec", "target": "supervisor_unspec"}, {"weight": 1, "source": "tech_unspec", "target": "electrician"}, {"weight": 1, "source": "tech_unspec", "target": "tech_unspec"}, {"weight": 1, "source": "supervisor_unspec", "target": "maintenance_WKR"}, {"weight": 3, "source": "supervisor_unspec", "target": "resident_inspector"}, {"weight": 2, "source": "supervisor_unspec", "target": "supervisor_unspec"}, {"weight": 1, "source": "supervisor_unspec", "target": "shift_manager"}, {"weight": 1, "source": "shift_manager", "target": "resident_inspector"}]}


var svg2 = d3.select("#svg2"),
    width = +svg2.attr("width"),
    height = +svg2.attr("height");

var simulation2 = d3.forceSimulation(svg2)
    .force("link", d3.forceLink().id(function (d) {
        return d.id;
    }))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2));

d3.json("data2", function (error, graph2) {
  
    if (error == true) throw error;

    graph2 = data2;

    var link = svg2.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(graph2.links)
        .enter().append("line");

    var node = svg2.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(graph2.nodes)
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
            .on("start", dragstarted2)
            .on("drag", dragged2)
            .on("end", dragended2));

    node.append("title")
        .text(function (d) {
            return d.id;
        });

    simulation2
        .nodes(graph2.nodes)
        .on("tick", ticked);

    simulation2.force("link")
        .links(graph2.links);

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
    simulation2.start();
});

function dragstarted2(d) {
    if (!d3.event.active) simulation2.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged2(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}

function dragended2(d) {
    if (!d3.event.active) simulation2.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}
