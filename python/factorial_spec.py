import unittest
from factorial import factorial

class FactorialTest(unittest.TestCase):

    def test_letter(self):
        self.assertEqual(factorial('a'),'Number must be an integer greater than or equal to 0.')
        
    def test_8(self):
        self.assertEqual(factorial(8),40320)

    def test_18(self):
        self.assertEqual(factorial(18),6402373705728000)

    def test_45(self):
        self.assertEqual(factorial(45),119622220865480194561963161495657715064383733760000000000)

if __name__=='__main__':
    unittest.main()
    


# print(factorial('a') == 'Number must be an integer greater than or equal to 0.')
# print(factorial(8) == 40320)
# print(factorial(18) == 6402373705728000)
# print(factorial(45) == 119622220865480194561963161495657715064383733760000000000)
# Test how high of a number your program can calculate. Can you push it further?
