def get_file_content(file_path = None)->str:

	''' Returns the content of the file.
	------------------
	:param File path:
	:return: File content
	'''

	if file_path is None:
		return None

	with open(file_path, 'r', encoding='utf-8', errors='ignore') as input_file:
		data = input_file.read()
		input_file.close()

	return data
