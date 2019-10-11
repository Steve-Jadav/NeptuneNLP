// This is adapted from https://bl.ocks.org/mbostock/2675ff61ea5e063ede2b5d63c08020c7

var data_new = {"directed": false, "multigraph": false, "graph": {}, "nodes": [{"betweenness": 0.0, "class": 0, "id": "reactor_OP"}, {"betweenness": 0.0, "class": 0, "id": "plant_manager"}, {"betweenness": 0.0, "class": 0, "id": "auxiliary_building_assistant"}, {"betweenness": 2.0952380952380953, "class": 2, "id": "engineers_unspec"}, {"betweenness": 0.0, "class": 0, "id": "s_reactor_operator"}, {"betweenness": 0.653061224489796, "class": 0, "id": "CR_supervisor"}, {"betweenness": 0.0, "class": 0, "id": "physician"}, {"betweenness": 0.0, "class": 0, "id": "mechanic_unspec"}, {"betweenness": 0.0, "class": 0, "id": "shift_supervisor"}, {"betweenness": 0.0, "class": 0, "id": "contractor_nonlicensed"}, {"betweenness": 0.0, "class": 0, "id": "operator_trainee_unspec"}, {"betweenness": 0.0, "class": 0, "id": "maintenance_sup"}, {"betweenness": 0.0, "class": 0, "id": "reactor_ENG"}, {"betweenness": 0.0, "class": 0, "id": "util_OP"}, {"betweenness": 47.86394557823129, "class": 3, "id": "operators_unspec"}, {"betweenness": 0.0, "class": 0, "id": "supervisor"}, {"betweenness": 0.0, "class": 0, "id": "CR_shift_supervisor"}, {"betweenness": 0.0, "class": 0, "id": "system_design_ENG"}, {"betweenness": 72.57142857142857, "class": 3, "id": "operator_unspec"}, {"betweenness": 0.0, "class": 0, "id": "fire_watch_staff"}, {"betweenness": 0.0, "class": 0, "id": "mechanics_unspec"}, {"betweenness": 0.0, "class": 0, "id": "quality_control"}, {"betweenness": 3.482993197278912, "class": 2, "id": "engineer_unspec"}, {"betweenness": 0.0, "class": 0, "id": "i_and_c_tech"}, {"betweenness": 0.0, "class": 0, "id": "transmission_system_OP"}, {"betweenness": 1.2789115646258504, "class": 0, "id": "assistant_shift_sup"}, {"betweenness": 34.285714285714285, "class": 0, "id": "technician_unspec"}, {"betweenness": 0.0, "class": 0, "id": "analysts_unspec"}, {"betweenness": 0.0, "class": 0, "id": "operations_sup"}, {"betweenness": 0.0, "class": 0, "id": "shift_technical_advisor"}, {"betweenness": 0.0, "class": 0, "id": "independent_system_OP"}, {"betweenness": 0.0, "class": 0, "id": "outage_manager"}, {"betweenness": 0.0, "class": 0, "id": "worker_unspec"}, {"betweenness": 0.0, "class": 0, "id": "procedure_writer"}, {"betweenness": 30.557823129251705, "class": 1, "id": "control_room_sup"}, {"betweenness": 0.0, "class": 0, "id": "fire_shift_CPT"}, {"betweenness": 0.0, "class": 0, "id": "radiation_protection_tech"}, {"betweenness": 0.0, "class": 0, "id": "fire_watch_sup"}, {"betweenness": 0.0, "class": 0, "id": "team_lead"}, {"betweenness": 4.35374149659864, "class": 0, "id": "licensed_OP"}, {"betweenness": 1.6326530612244898, "class": 0, "id": "control_room_OP"}, {"betweenness": 0.0, "class": 0, "id": "chem_tech"}, {"betweenness": 58.80272108843536, "class": 4, "id": "tech_unspec"}, {"betweenness": 1.2244897959183674, "class": 0, "id": "electrician"}, {"betweenness": 0.0, "class": 0, "id": "Work_control_supervisor"}, {"betweenness": 0.0, "class": 0, "id": "operations_manager"}, {"betweenness": 20.462585034013614, "class": 1, "id": "supervisor_unspec"}, {"betweenness": 0.0, "class": 0, "id": "rp_tech"}, {"betweenness": 0.0, "class": 0, "id": "maintenance_WKR"}, {"betweenness": 31.75510204081633, "class": 1, "id": "shift_manager"}, {"betweenness": 17.959183673469386, "class": 0, "id": "resident_inspector"}], "links": [{"weight": 1, "source": "reactor_OP", "target": "control_room_sup"}, {"weight": 1, "source": "plant_manager", "target": "resident_inspector"}, {"weight": 1, "source": "engineers_unspec", "target": "maintenance_WKR"}, {"weight": 1, "source": "engineers_unspec", "target": "operators_unspec"}, {"weight": 1, "source": "engineers_unspec", "target": "engineer_unspec"}, {"weight": 1, "source": "s_reactor_operator", "target": "operator_unspec"}, {"weight": 1, "source": "CR_supervisor", "target": "control_room_sup"}, {"weight": 1, "source": "CR_supervisor", "target": "shift_manager"}, {"weight": 2, "source": "CR_supervisor", "target": "supervisor_unspec"}, {"weight": 2, "source": "CR_supervisor", "target": "operator_unspec"}, {"weight": 1, "source": "shift_supervisor", "target": "shift_supervisor"}, {"weight": 1, "source": "shift_supervisor", "target": "operators_unspec"}, {"weight": 1, "source": "contractor_nonlicensed", "target": "worker_unspec"}, {"weight": 1, "source": "contractor_nonlicensed", "target": "technician_unspec"}, {"weight": 2, "source": "operators_unspec", "target": "operator_unspec"}, {"weight": 1, "source": "operators_unspec", "target": "control_room_sup"}, {"weight": 2, "source": "operators_unspec", "target": "tech_unspec"}, {"weight": 1, "source": "operators_unspec", "target": "supervisor_unspec"}, {"weight": 1, "source": "operators_unspec", "target": "maintenance_WKR"}, {"weight": 1, "source": "operators_unspec", "target": "supervisor"}, {"weight": 1, "source": "supervisor", "target": "tech_unspec"}, {"weight": 1, "source": "supervisor", "target": "operator_unspec"}, {"weight": 1, "source": "operator_unspec", "target": "licensed_OP"}, {"weight": 9, "source": "operator_unspec", "target": "operator_unspec"}, {"weight": 1, "source": "operator_unspec", "target": "shift_manager"}, {"weight": 1, "source": "operator_unspec", "target": "resident_inspector"}, {"weight": 1, "source": "operator_unspec", "target": "tech_unspec"}, {"weight": 1, "source": "operator_unspec", "target": "control_room_OP"}, {"weight": 1, "source": "operator_unspec", "target": "control_room_sup"}, {"weight": 1, "source": "engineer_unspec", "target": "shift_manager"}, {"weight": 2, "source": "engineer_unspec", "target": "engineer_unspec"}, {"weight": 2, "source": "engineer_unspec", "target": "supervisor_unspec"}, {"weight": 1, "source": "transmission_system_OP", "target": "transmission_system_OP"}, {"weight": 1, "source": "assistant_shift_sup", "target": "control_room_sup"}, {"weight": 1, "source": "assistant_shift_sup", "target": "shift_manager"}, {"weight": 2, "source": "assistant_shift_sup", "target": "operations_manager"}, {"weight": 1, "source": "technician_unspec", "target": "worker_unspec"}, {"weight": 2, "source": "technician_unspec", "target": "technician_unspec"}, {"weight": 1, "source": "technician_unspec", "target": "tech_unspec"}, {"weight": 2, "source": "control_room_sup", "target": "shift_manager"}, {"weight": 3, "source": "control_room_sup", "target": "control_room_sup"}, {"weight": 2, "source": "control_room_sup", "target": "supervisor_unspec"}, {"weight": 1, "source": "control_room_sup", "target": "tech_unspec"}, {"weight": 2, "source": "licensed_OP", "target": "control_room_OP"}, {"weight": 1, "source": "licensed_OP", "target": "electrician"}, {"weight": 1, "source": "control_room_OP", "target": "tech_unspec"}, {"weight": 1, "source": "tech_unspec", "target": "shift_manager"}, {"weight": 3, "source": "tech_unspec", "target": "supervisor_unspec"}, {"weight": 1, "source": "electrician", "target": "supervisor_unspec"}, {"weight": 1, "source": "operations_manager", "target": "shift_manager"}, {"weight": 1, "source": "supervisor_unspec", "target": "shift_manager"}]}



var svg1_new = d3.select("#svg1_new"),
    width = +svg1_new.attr("width"),
    height = +svg1_new.attr("height");

var simulation_new = d3.forceSimulation(svg1_new)
    .force("link", d3.forceLink().id(function (d) {
        return d.id;
    }))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2));

d3.json(data_new, function(error, graph_new)  {

    if (error == true) throw error;
    graph_new = data_new;

    var link = svg1_new.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(graph_new.links)
        .enter().append("line");

    var node = svg1_new.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(graph_new.nodes)
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
            .on("start", dragstarted_new)
            .on("drag", dragged_new)
            .on("end", dragended_new));

    node.append("title")
        .text(function (d) {
            return d.id;
        });

    simulation_new
        .nodes(graph_new.nodes)
        .on("tick", ticked);

    simulation_new.force("link")
        .links(graph_new.links);

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

function dragstarted_new(d) {
    if (!d3.event.active) simulation_new.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged_new(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}

function dragended_new(d) {
    if (!d3.event.active) simulation_new.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}
