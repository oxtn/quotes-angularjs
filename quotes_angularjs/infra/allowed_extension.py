def allowed_extension(*allowed):
    '''Custom predict checking if the the file extension
    of the request URI is in the allowed set.
    '''
    def predicate(info, request):
        import os
        ext = os.path.splitext(request.path)[1]
        request.path_extenstion = ext
        return ext in allowed
    return predicate
