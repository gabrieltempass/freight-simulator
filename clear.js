function CLEAR()
{
  var app = SpreadsheetApp;
  var ss_simulator = app.getActiveSpreadsheet();
  var simulador_sheet_simulator = ss_simulator.getSheetByName("Simulador");
  simulador_sheet_simulator.getRange("H7").setValue("");
  simulador_sheet_simulator.getRange("H8").setValue("");
  simulador_sheet_simulator.getRange("H9").setValue("");
  for(var i1 = 0; i1 < 3; i1 ++)
  {
    for(var i2 = 0; i2 < 27; i2 ++)
    {
      simulador_sheet_simulator.getRange(14 + i2, 7 + i1).setValue("");
    }
  }
}
