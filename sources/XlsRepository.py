from openpyxl import Workbook,load_workbook
from sources.SettingsParser import DATA_PATH

DATA_PATH = DATA_PATH

class XlsRepository:
    def __init__(self):
        self.backup_folder = None
        self.base_file = None
        self.workbook = Workbook()

    @classmethod
    def fromfilename(cls, base_file, backup_folder):
        cls.backup_folder = backup_folder
        cls.base_file = base_file
        cls.workbook = load_workbook(filename=base_file)
        return cls()


    def write_base_sheet(self,drivers,routes,file_name=DATA_PATH):
        self.workbook = Workbook()
        driver_sheet = self.workbook.active
        driver_sheet.title = "Soferi"
        routes_sheet=self.workbook.create_sheet("Rute")
        if drivers:
            r=1
            for driver in drivers:
                _=driver_sheet.cell(row=r,column=1,value=driver.name)
                r+=1
        if routes:
            r=1
            for route in routes:
                c=1
                for slot in route.routes:
                    _=routes_sheet.cell(row=r,column=c,value="{0} {1}".format(slot[1],slot[0]))
                    c+=1
                r+=1
        self.workbook.save(file_name)