describe ('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.temp).toEqual(20);
  });

  describe('Temp increases', function() {
    it('by one degree', function() {
      thermostat.up(1);
      expect(thermostat.temp).toEqual(21)
    });
    it('to no higher than 25 degrees, when powerSave is on', function() {
      thermostat.up(45);
      expect(thermostat.temp).toEqual(25);
    });
  });

  describe('Temp decreases', function(){
    it('by seven degrees', function(){
      thermostat.down(7);
      expect(thermostat.temp).toEqual(13);
    });
    it('to no lower than 10 degrees', function() {
      thermostat.down(99999)
      expect(thermostat.temp).toEqual(10)
    });
  });

  describe('powersave', function(){
    it('is on by default', function(){
      expect(thermostat.powerSave).toBeTruthy();
    });
  });


});
