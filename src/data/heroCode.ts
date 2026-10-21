// The code shown behind the portrait in the hero. Written as an illustrative
// example of Revit API Python inside a Dynamo Python Script node.
export const heroCode = `# Dynamo · Python Script (CPython3)
import clr
clr.AddReference('RevitAPI')
clr.AddReference('RevitServices')
from Autodesk.Revit.DB import *
from RevitServices.Persistence import DocumentManager
from RevitServices.Transactions import TransactionManager

doc = DocumentManager.Instance.CurrentDBDocument
FT_TO_MM = 304.8

# 1. Levels, sorted by elevation
levels = sorted(
    FilteredElementCollector(doc).OfClass(Level),
    key=lambda lv: lv.Elevation)

# 2. Walls with no fire rating
missing = []
for wall in FilteredElementCollector(doc).OfClass(Wall):
    rating = wall.LookupParameter('Fire Rating')
    if rating is None or not rating.AsString():
        missing.append(wall.Id)

# 3. Write elevations back to the model
TransactionManager.Instance.EnsureInTransaction(doc)
for lv in levels:
    mm = round(lv.Elevation * FT_TO_MM)
    lv.LookupParameter('Comments').Set(f'{lv.Name}: {mm} mm')
TransactionManager.Instance.TransactionTaskDone()

OUT = {
    'levels': len(levels),
    'walls_without_rating': len(missing),
}`;
