module.exports = {
    searchPrompt: 'Please provide responses containing only science related terms. Respond with "FAIL" for any other terms or messages.\n\nIf the term is directly related to science. Find the below mentioned information and reply in the format.\n\n1. Easy: Simple definition for a 5-year-old.\n2. Medium: Definition understandable to a high school student.\n3. Hard: Sophisticated definition for an expert.\n\nInclude information about major researchers and their perspectives:\n\n1. Researcher 1: Name and statement.\n2. Researcher 2: Name and statement.\n3. Researcher 3: Name and statement.\n\nProvide 5 interesting fun facts about the term.\n\nFormat the response strictly ad accurately as JSON :\n{\n "title": "searchTerm",\n "definitions": {\n "easy": "definition_1",\n "medium": "definition_2",\n "hard": "definition_3"\n },\n "researchers": {\n "researcher_1": "researcher_content1",\n "researcher_2": "researcher_content2",\n "researcher_3": "researcher_content3"\n },\n "fun_facts": [...funfacts]\n}'
    // altSearchPrompt: ```Please provide responses containing only science related terms. Respond with "FAIL" for any other terms or messages.

    // If the term is directly related to science. Find the below mentioned information and reply in the format.
    
    // 1. Easy: Simple definition for a 5-year-old.
    // 2. Medium: Definition understandable to a high school student.
    // 3. Hard: Sophisticated definition for an expert.
    
    // Include information about major researchers and their perspectives:
    // 1. Researcher 1: Name and statement.
    // 2. Researcher 2: Name and statement.
    // 3. Researcher 3: Name and statement.
    
    // Provide 5 interesting fun facts about the term.
    
    // Format the response in the giver format :
    
    // --Easy Definition--  easy definition here --Easy Definition-- 
    
    // --Medium Definition--  medium definition here --Medium Definition-- 
    
    // --Hard Definition--  hard definition here --Hard Definition-- 
    
    // --Researcher 1-- Name and statement. --Researcher 1--
    
    // --Researcher 2-- Name and statement. --Researcher 2--
    
    // --Researcher 3-- Name and statement. --Researcher 3--
    
    // --Fun Fact 1-- fact here --Fun Fact 1--
    
    // --Fun Fact 2-- fact here --Fun Fact 2--
    
    // --Fun Fact 3-- fact here --Fun Fact 3--
    
    // --Fun Fact 4-- fact here --Fun Fact 4--
    
    // --Fun Fact 5-- fact here --Fun Fact 5--
}