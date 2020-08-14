import unittest
import os

from sources.XlsRepository import XlsRepository
from sources.Driver import Driver
from sources.Route import Route
from openpyxl import Workbook,load_workbook


class TestWriteBaseSheets(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        cls.repository = XlsRepository()
        cls.file_path = "../data/data_test.xlsx"

    def test_write_file(self):
        self.repository.write_base_sheet(None,None,self.file_path)

        self.test_workbook = load_workbook(filename=self.file_path)
        self.assertIsNotNone(self.test_workbook)

    def test_write_sheets(self):
        sheetNames = ["Soferi","Rute"]

        self.repository.write_base_sheet(None,None,self.file_path)

        self.test_workbook = load_workbook(filename=self.file_path)
        self.assertEqual(sheetNames,self.test_workbook.sheetnames)

    def test_write_Drivers(self):
        drivers = [Driver("Ion"),Driver("Vasile")]

        self.repository.write_base_sheet(drivers,None,self.file_path)

        self.test_workbook = load_workbook(filename=self.file_path)
        drivers_sheet = self.test_workbook["Soferi"]
        drivers_name = [cell.value for cell in drivers_sheet['A']]
        self.assertEqual(["Ion","Vasile"],drivers_name)

    def test_write_Routes(self):
        routes = [
            Route(locations=["B1","R2"],hours=["10:00","11:00"]),
            Route(locations=["R1","B2"],hours=["10:00","11:00"])
        ]

        self.repository.write_base_sheet(None,routes,self.file_path)

        self.test_workbook = load_workbook(filename=self.file_path)
        routes_sheet = self.test_workbook["Rute"]
        routes1_name = [cell.value for cell in routes_sheet['1']]
        self.assertEqual(["10:00 B1","11:00 R2"],routes1_name)

    @classmethod
    def tearDownClass(cls):
        os.remove(cls.file_path)


if __name__ == '__main__':
    unittest.main()