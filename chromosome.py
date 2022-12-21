import random
import math
chromosomeNumber = 23

j = 0
def extinguish(j,chromosomeNumber):
  j=j+1
  extinguishedNumber = 0
  for num in range(0,chromosomeNumber):
    extinguishedOrNot = math.floor(random.random()*2)
    if extinguishedOrNot == 1:
      extinguishedNumber+=1
  chromosomeNumber -= extinguishedNumber
  print(chromosomeNumber)
  if chromosomeNumber>0:
    extinguish(j,chromosomeNumber)
  else:
    print('試行回数は'+str(j))
    return j

extinguish(j,chromosomeNumber)