
class Route():
    def __init__(self, locations, hours):
        if len(locations) != len(hours):
            raise AttributeError("There are {0} locations and {1} errors".format(len(locations),len(hours)))
        self.routes= zip(locations,hours)