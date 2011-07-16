describe("wb.utilities", function() {
  describe("formatTemperature", function() {
    beforeEach(function() {
      this.subject = wb.utilities.formatTemperature({ fahrenheit: 84 });
    });

    it("formats the temperature properly", function() {
      expect(this.subject).toEqual("84&deg;");
    });
  });

  describe("conditionName", function() {
    it("calculates condition name correctly", function() {
      expect(wb.utilities.conditionName("cloudy")).toEqual("Cloudy");
    });
  });

  describe("radarUrl", function() {
    it("generates the correct url", function() {
      expect(wb.utilities.radarUrl({ latitude: 123, longitude: 456 })).toEqual("http://resize.wunderground.com/cgi-bin/resize_convert?ox=gif&url=radblast/cgi-bin/radar/WUNIDS_composite%3Fcenterlat=123%26centerlon=456%26radius=20%26newmaps=1%26smooth=1");
    });
  });
});
