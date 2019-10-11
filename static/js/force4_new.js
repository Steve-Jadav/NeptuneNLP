// This is adapted from https://bl.ocks.org/mbostock/2675ff61ea5e063ede2b5d63c08020c7

var data4_new = {"directed": false, "multigraph": false, "graph": {}, "nodes": [{"betweenness": 0.7482993197278912, "class": 0, "id": "reactor_OP"}, {"betweenness": 0.0, "class": 0, "id": "plant_manager"}, {"betweenness": 0.0, "class": 0, "id": "auxiliary_building_assistant"}, {"betweenness": 2.9659863945578233, "class": 2, "id": "engineers_unspec"}, {"betweenness": 2.36734693877551, "class": 0, "id": "s_reactor_operator"}, {"betweenness": 4.01943634596696, "class": 0, "id": "CR_supervisor"}, {"betweenness": 0.0, "class": 0, "id": "physician"}, {"betweenness": 3.265306122448979, "class": 0, "id": "mechanic_unspec"}, {"betweenness": 0.0, "class": 0, "id": "shift_supervisor"}, {"betweenness": 0.0, "class": 0, "id": "contractor_nonlicensed"}, {"betweenness": 0.0, "class": 0, "id": "operator_trainee_unspec"}, {"betweenness": 0.0, "class": 0, "id": "maintenance_sup"}, {"betweenness": 0.0, "class": 0, "id": "reactor_ENG"}, {"betweenness": 0.0, "class": 0, "id": "util_OP"}, {"betweenness": 24.555879494655, "class": 3, "id": "operators_unspec"}, {"betweenness": 0.27210884353741494, "class": 0, "id": "supervisor"}, {"betweenness": 0.0, "class": 0, "id": "CR_shift_supervisor"}, {"betweenness": 0.0, "class": 0, "id": "system_design_ENG"}, {"betweenness": 72.18464528668609, "class": 3, "id": "operator_unspec"}, {"betweenness": 0.0, "class": 0, "id": "fire_watch_staff"}, {"betweenness": 0.0, "class": 0, "id": "mechanics_unspec"}, {"betweenness": 0.0, "class": 0, "id": "quality_control"}, {"betweenness": 61.799805636540334, "class": 2, "id": "engineer_unspec"}, {"betweenness": 0.0, "class": 0, "id": "i_and_c_tech"}, {"betweenness": 0.0, "class": 0, "id": "transmission_system_OP"}, {"betweenness": 0.0, "class": 0, "id": "assistant_shift_sup"}, {"betweenness": 1.0884353741496597, "class": 0, "id": "technician_unspec"}, {"betweenness": 0.0, "class": 0, "id": "analysts_unspec"}, {"betweenness": 0.0, "class": 0, "id": "operations_sup"}, {"betweenness": 2.585034013605442, "class": 0, "id": "shift_technical_advisor"}, {"betweenness": 0.0, "class": 0, "id": "independent_system_OP"}, {"betweenness": 0.0, "class": 0, "id": "outage_manager"}, {"betweenness": 0.326530612244898, "class": 0, "id": "worker_unspec"}, {"betweenness": 0.0, "class": 0, "id": "procedure_writer"}, {"betweenness": 4.361516034985424, "class": 1, "id": "control_room_sup"}, {"betweenness": 0.0, "class": 0, "id": "fire_shift_CPT"}, {"betweenness": 0.2993197278911565, "class": 0, "id": "radiation_protection_tech"}, {"betweenness": 0.0, "class": 0, "id": "fire_watch_sup"}, {"betweenness": 0.0, "class": 0, "id": "team_lead"}, {"betweenness": 20.435374149659868, "class": 0, "id": "licensed_OP"}, {"betweenness": 9.9047619047619, "class": 0, "id": "control_room_OP"}, {"betweenness": 0.0, "class": 0, "id": "chem_tech"}, {"betweenness": 8.87269193391642, "class": 4, "id": "tech_unspec"}, {"betweenness": 23.6734693877551, "class": 0, "id": "electrician"}, {"betweenness": 0.0, "class": 0, "id": "Work_control_supervisor"}, {"betweenness": 0.0, "class": 0, "id": "operations_manager"}, {"betweenness": 34.316812439261426, "class": 1, "id": "supervisor_unspec"}, {"betweenness": 0.0, "class": 0, "id": "rp_tech"}, {"betweenness": 15.090379008746355, "class": 0, "id": "maintenance_WKR"}, {"betweenness": 21.71622934888241, "class": 1, "id": "shift_manager"}, {"betweenness": 1.0689990281827018, "class": 0, "id": "resident_inspector"}], "links": [{"weight": 1, "source": "reactor_OP", "target": "control_room_OP"}, {"weight": 2, "source": "reactor_OP", "target": "CR_supervisor"}, {"weight": 1, "source": "reactor_OP", "target": "control_room_sup"}, {"weight": 1, "source": "engineers_unspec", "target": "resident_inspector"}, {"weight": 3, "source": "engineers_unspec", "target": "supervisor_unspec"}, {"weight": 1, "source": "engineers_unspec", "target": "operators_unspec"}, {"weight": 1, "source": "engineers_unspec", "target": "operator_unspec"}, {"weight": 1, "source": "s_reactor_operator", "target": "supervisor_unspec"}, {"weight": 1, "source": "s_reactor_operator", "target": "electrician"}, {"weight": 3, "source": "CR_supervisor", "target": "shift_manager"}, {"weight": 3, "source": "CR_supervisor", "target": "operator_unspec"}, {"weight": 1, "source": "CR_supervisor", "target": "supervisor_unspec"}, {"weight": 1, "source": "mechanic_unspec", "target": "shift_technical_advisor"}, {"weight": 1, "source": "mechanic_unspec", "target": "maintenance_WKR"}, {"weight": 1, "source": "mechanic_unspec", "target": "electrician"}, {"weight": 1, "source": "mechanic_unspec", "target": "engineer_unspec"}, {"weight": 1, "source": "contractor_nonlicensed", "target": "electrician"}, {"weight": 1, "source": "operator_trainee_unspec", "target": "licensed_OP"}, {"weight": 2, "source": "operators_unspec", "target": "shift_manager"}, {"weight": 1, "source": "operators_unspec", "target": "operator_unspec"}, {"weight": 1, "source": "operators_unspec", "target": "engineer_unspec"}, {"weight": 1, "source": "operators_unspec", "target": "tech_unspec"}, {"weight": 2, "source": "operators_unspec", "target": "radiation_protection_tech"}, {"weight": 1, "source": "operators_unspec", "target": "resident_inspector"}, {"weight": 2, "source": "operators_unspec", "target": "licensed_OP"}, {"weight": 1, "source": "operators_unspec", "target": "control_room_sup"}, {"weight": 2, "source": "supervisor", "target": "engineer_unspec"}, {"weight": 1, "source": "supervisor", "target": "maintenance_WKR"}, {"weight": 1, "source": "supervisor", "target": "tech_unspec"}, {"weight": 5, "source": "operator_unspec", "target": "operator_unspec"}, {"weight": 1, "source": "operator_unspec", "target": "technician_unspec"}, {"weight": 1, "source": "operator_unspec", "target": "control_room_sup"}, {"weight": 2, "source": "operator_unspec", "target": "rp_tech"}, {"weight": 4, "source": "operator_unspec", "target": "licensed_OP"}, {"weight": 1, "source": "operator_unspec", "target": "shift_manager"}, {"weight": 1, "source": "operator_unspec", "target": "maintenance_WKR"}, {"weight": 2, "source": "operator_unspec", "target": "control_room_OP"}, {"weight": 1, "source": "operator_unspec", "target": "worker_unspec"}, {"weight": 2, "source": "operator_unspec", "target": "engineer_unspec"}, {"weight": 1, "source": "operator_unspec", "target": "shift_technical_advisor"}, {"weight": 1, "source": "operator_unspec", "target": "supervisor_unspec"}, {"weight": 2, "source": "fire_watch_staff", "target": "fire_watch_staff"}, {"weight": 1, "source": "mechanics_unspec", "target": "engineer_unspec"}, {"weight": 1, "source": "engineer_unspec", "target": "shift_manager"}, {"weight": 1, "source": "engineer_unspec", "target": "resident_inspector"}, {"weight": 3, "source": "engineer_unspec", "target": "engineer_unspec"}, {"weight": 1, "source": "engineer_unspec", "target": "maintenance_WKR"}, {"weight": 1, "source": "engineer_unspec", "target": "control_room_OP"}, {"weight": 1, "source": "engineer_unspec", "target": "electrician"}, {"weight": 2, "source": "engineer_unspec", "target": "tech_unspec"}, {"weight": 1, "source": "technician_unspec", "target": "supervisor_unspec"}, {"weight": 1, "source": "technician_unspec", "target": "licensed_OP"}, {"weight": 1, "source": "shift_technical_advisor", "target": "shift_manager"}, {"weight": 1, "source": "worker_unspec", "target": "tech_unspec"}, {"weight": 1, "source": "control_room_sup", "target": "shift_manager"}, {"weight": 1, "source": "radiation_protection_tech", "target": "supervisor_unspec"}, {"weight": 1, "source": "licensed_OP", "target": "shift_manager"}, {"weight": 1, "source": "licensed_OP", "target": "licensed_OP"}, {"weight": 1, "source": "control_room_OP", "target": "shift_manager"}, {"weight": 1, "source": "control_room_OP", "target": "supervisor_unspec"}, {"weight": 1, "source": "tech_unspec", "target": "supervisor_unspec"}, {"weight": 1, "source": "tech_unspec", "target": "shift_manager"}, {"weight": 1, "source": "electrician", "target": "maintenance_WKR"}, {"weight": 2, "source": "supervisor_unspec", "target": "maintenance_WKR"}, {"weight": 1, "source": "supervisor_unspec", "target": "supervisor_unspec"}, {"weight": 1, "source": "supervisor_unspec", "target": "shift_manager"}]}



var svg4_new = d3.select("#svg4_new"),
    width = +svg4_new.attr("width"),
    height = +svg4_new.attr("height");

var simulation4_new = d3.forceSimulation(svg4_new)
    .force("link", d3.forceLink().id(function (d) {
        return d.id;
    }))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2));

d3.json(data4_new, function (error, graph4_new) {

    if (error == true) throw error;

    graph4_new = data4_new;
    var link = svg4_new.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(graph4_new.links)
        .enter().append("line");

    var node = svg4_new.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(graph4_new.nodes)
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
            .on("start", dragstarted4_new)
            .on("drag", dragged4_new)
            .on("end", dragended4_new));

    node.append("title")
        .text(function (d) {
            return d.id;
        });

    simulation4_new
        .nodes(graph4_new.nodes)
        .on("tick", ticked);

    simulation4_new.force("link")
        .links(graph4_new.links);

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

function dragstarted4_new(d) {
    if (!d3.event.active) simulation4_new.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged4_new(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}

function dragended4_new(d) {
    if (!d3.event.active) simulation4_new.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}
