def getContent(fileName):
	''' Returns content of the file in a string'''

	with open(fileName) as inputFile:
		data = inputFile.read()
		inputFile.close()

	print (data)	
	return data