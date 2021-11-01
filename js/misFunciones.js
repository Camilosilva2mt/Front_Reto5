//CRUD DE LA TABLA CATEGORIA
function traerInformacioncategorias() {
  $.ajax({
    url: "http://168.138.130.33:8080/api/Category/all",
    type: "GET",
    datatype: "JSON",
    success: function (respuestacat) {
      console.log(respuestacat);
      pintarRespuestacat(respuestacat);
    },
  });
}
function pintarRespuestacat(respuestacat) {
  let myTable1 = "<table>";
  for (i = 0; i < respuestacat.length; i++) {
    myTable1 += "<tr>";
    myTable1 += "<td>" + respuestacat[i].name + "</td>";
    myTable1 += "<td>" + respuestacat[i].description + "</td>";
    myTable1 += "</tr>";
  }
  myTable1 += "</table>";
  $("#resultadocat").html(myTable1);
}
function guardarInformacioncategorias() {
  if ($("#cname").val() == 0 || $("#cdescription").val() == 0) {
    alert("Debe diligenciar todos los campos");
  } else {
    let varc = {
      name: $("#cname").val(),
      description: $("#cdescription").val(),
    };
    $.ajax({
      type: "POST",
      contentType: "application/json; charset=utf-8",
      dataType: "JSON",
      data: JSON.stringify(varc),
      url: "http://168.138.130.33:8080/api/Category/save",

      success: function (response) {
        console.log(response);
        console.log("Se guardo correctamente");
        alert("Se guardo correctamente");
        window.location.reload();
      },

      error: function (jqXHR, textStatus, errorThrown) {
        window.location.reload();
        alert("No se guardo correctamente");
      },
    });
  }
}
//CRUD TABLA CUATRIMOTOS
function traerInformacioncuatrimotos() {
  $.ajax({
    url: "http://168.138.130.33:8080/api/Quadbike/all",
    type: "GET",
    datatype: "JSON",
    success: function (respuestacuatri) {
      console.log(respuestacuatri);
      pintarRespuestacuatrimotos(respuestacuatri);
    },
  });
}
function pintarRespuestacuatrimotos(respuestacuatri) {
  let myTable1 = "<table>";
  for (i = 0; i < respuestacuatri.length; i++) {
    myTable1 += "<tr>";
    myTable1 += "<td>" + respuestacuatri[i].name + "</td>";
    myTable1 += "<td>" + respuestacuatri[i].brand + "</td>";
    myTable1 += "<td>" + respuestacuatri[i].year + "</td>";
    myTable1 += "<td>" + respuestacuatri[i].description + "</td>";
    myTable1 += "</tr>";
  }
  myTable1 += "</table>";
  $("#resultadocuatri").html(myTable1);
}

function guardarInformacioncuatrimotos() {
  if (
    $("#namect").val() == 0 ||
    $("#brandct").val() == 0 ||
    $("#yearct").val() == 0 ||
    $("#descriptionct").val() == 0
  ) {
    alert("Debe diligenciar todos los campos");
  } else {
    let varct = {
      name: $("#namect").val(),
      brand: $("#brandct").val(),
      year: $("#yearct").val(),
      description: $("#descriptionct").val(),
    };

    $.ajax({
      type: "POST",
      contentType: "application/json; charset=utf-8",
      dataType: "JSON",
      data: JSON.stringify(varct),

      url: "http://168.138.130.33:8080/api/Quadbike/save",

      success: function (response) {
        console.log(response);
        console.log("Se guardo correctamente");
        alert("Se guardo correctamente");
        window.location.reload();
      },

      error: function (jqXHR, textStatus, errorThrown) {
        window.location.reload();
        alert("No se guardo correctamente");
      },
    });
  }
}
//CRUD TABLA CLIENTES
function traerInformacioncliente() {
  $.ajax({
    url: "http://168.138.130.33:8080/api/Client/all",
    type: "GET",
    datatype: "JSON",
    success: function (respuestacliente) {
      console.log(respuestacliente);
      pintarRespuestacliente(respuestacliente);
    },
  });
}
function pintarRespuestacliente(respuestacliente) {
  let myTable2 = "<table>";
  for (i = 0; i < respuestacliente.length; i++) {
    myTable2 += "<tr>";
    myTable2 += "<td>" + respuestacliente[i].email + "</td>";
    myTable2 += "<td>" + respuestacliente[i].password + "</td>";
    myTable2 += "<td>" + respuestacliente[i].name + "</td>";
    myTable2 += "<td>" + respuestacliente[i].age + "</td>";
    myTable2 += "</tr>";
  }
  myTable2 += "</table>";
  $("#resultadocliente").html(myTable2);
}
function guardarInformacioncliente() {
  if (
    $("#emailcl").val() == 0 ||
    $("#passwordcl").val() == 0 ||
    $("#namecl").val() == 0 ||
    $("#agecl").val() == 0
  ) {
    alert("Debe diligenciar todos los campos");
  } else {
    let var4 = {
      email: $("#emailcl").val(),
      password: $("#passwordcl").val(),
      name: $("#namecl").val(),
      age: $("#agecl").val(),
    };

    $.ajax({
      type: "POST",
      contentType: "application/json; charset=utf-8",
      dataType: "JSON",
      data: JSON.stringify(var4),

      url: "http://168.138.130.33:8080/api/Client/save",

      success: function (response) {
        console.log(response);
        console.log("Se guardo correctamente");
        alert("Se guardo correctamente");
        window.location.reload();
      },

      error: function (jqXHR, textStatus, errorThrown) {
        window.location.reload();
        alert("No se guardo correctamente");
      },
    });
  }
}
//CRUD de la tabla Mensaje
function traerInformacionmensaje() {
  $.ajax({
    url: "http://168.138.130.33:8080/api/Message/all",
    type: "GET",
    datatype: "JSON",
    success: function (respuestamensaje) {
      console.log(respuestamensaje);
      pintarRespuestamensaje(respuestamensaje);
    },
  });
}
function pintarRespuestamensaje(respuestamensaje) {
  let myTable3 = "<table>";
  for (i = 0; i < respuestamensaje.length; i++) {
    myTable3 += "<tr>";
    myTable3 += "<td>" + respuestamensaje[i].messageText + "</td>";
    myTable3 += "</tr>";
  }
  myTable3 += "</table>";
  $("#resultadomensaje").html(myTable3);
}
function guardarInformacionmensaje() {
  if ($("#messagetextc").val() == 0) {
    alert("Debe diligenciar todos los campos");
  } else {
    let var5 = {
      messageText: $("#messagetextc").val(),
    };

    $.ajax({
      type: "POST",
      contentType: "application/json; charset=utf-8",
      dataType: "JSON",
      data: JSON.stringify(var5),

      url: "http://168.138.130.33:8080/api/Message/save",

      success: function (response) {
        console.log(response);
        console.log("Se guardo correctamente");
        alert("Se guardo correctamente");
        window.location.reload();
      },

      error: function (jqXHR, textStatus, errorThrown) {
        window.location.reload();
        alert("No se guardo correctamente");
      },
    });
  }
}
//CRUD de la tabla Reservación
function traerInformacionreserva() {
  $.ajax({
    url: "http://168.138.130.33:8080/api/Reservation/all",
    type: "GET",
    datatype: "JSON",
    success: function (respuestareserva) {
      console.log(respuestareserva);
      pintarRespuestareserva(respuestareserva);
    },
  });
}
function pintarRespuestareserva(respuestareserva) {
  let myTable4 = "<table>";
  for (i = 0; i < respuestareserva.length; i++) {
    myTable4 += "<tr>";
    myTable4 += "<td>" + cnvFecha(respuestareserva[i].startDate) + "</td>";
    myTable4 += "<td>" + cnvFecha(respuestareserva[i].devolutionDate) + "</td>";
    myTable4 += "</tr>";
  }
  myTable4 += "</table>";
  $("#resultadoreserva").html(myTable4);
}

function cnvFecha(fecha){
  return fecha.substring(0,10);
}
function guardarInformacionreserva() {
  if ($("#startDate").val() == 0 || $("#devolutionDate").val() == 0) {
    alert("Debe diligenciar todos los campos");
  } else {
    let var6 = {
      startDate: $("#startDate").val(),
      devolutionDate: $("#devolutionDate").val(),
    };

    $.ajax({
      type: "POST",
      contentType: "application/json; charset=utf-8",
      dataType: "JSON",
      data: JSON.stringify(var6),

      url: "http://168.138.130.33:8080/api/Reservation/save",

      success: function (response) {
        console.log(response);
        console.log("Se guardo correctamente");
        alert("Se guardo correctamente");
        window.location.reload();
      },

      error: function (jqXHR, textStatus, errorThrown) {
        window.location.reload();
        alert("No se guardo correctamente");
      },
    });
  }
}