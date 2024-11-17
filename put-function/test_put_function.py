import pytest
from your_module import put_function  # Adjust this import based on your actual module name

@pytest.fixture
def sample_data():
    """Fixture to provide sample data for tests"""
    return {
        "key": "test_key",
        "value": "test_value"
    }

def test_put_function_basic(sample_data):
    """Test basic put operation with valid input"""
    result = put_function(sample_data["key"], sample_data["value"])
    assert result is True  # Assuming successful put returns True

def test_put_function_empty_key():
    """Test behavior with empty key"""
    with pytest.raises(ValueError):
        put_function("", "test_value")

def test_put_function_empty_value():
    """Test behavior with empty value"""
    with pytest.raises(ValueError):
        put_function("test_key", "")

def test_put_function_none_inputs():
    """Test behavior with None inputs"""
    with pytest.raises(TypeError):
        put_function(None, "test_value")
    with pytest.raises(TypeError):
        put_function("test_key", None)

def test_put_function_large_value():
    """Test putting a large value"""
    large_value = "x" * 1024 * 1024  # 1MB of data
    result = put_function("large_key", large_value)
    assert result is True

def test_put_function_special_characters():
    """Test handling of special characters in key and value"""
    special_chars = "@#$%^&*()"
    result = put_function(f"key{special_chars}", f"value{special_chars}")
    assert result is True

def test_put_function_update_existing():
    """Test updating an existing key with new value"""
    key = "update_key"
    original_value = "original"
    new_value = "updated"
    
    # First put
    put_function(key, original_value)
    # Update
    result = put_function(key, new_value)
    assert result is True

def test_put_function_unicode():
    """Test handling of unicode characters"""
    result = put_function("unicode_key", "Hello 世界")
    assert result is True

def test_put_function_whitespace():
    """Test handling of whitespace in key and value"""
    result = put_function("  key_with_spaces  ", "  value_with_spaces  ")
    assert result is True

def test_put_function_numeric():
    """Test with numeric values (as strings)"""
    result = put_function("numeric_key", "12345")
    assert result is True

def test_put_function_binary():
    """Test with binary data"""
    binary_data = b"binary data"
    with pytest.raises(TypeError):  # Assuming the function expects string data
        put_function("binary_key", binary_data)

@pytest.mark.parametrize("invalid_type", [
    123,
    1.23,
    ["list"],
    {"dict": "value"},
    set(),
    tuple()
])
def test_put_function_invalid_types(invalid_type):
    """Test with various invalid input types"""
    with pytest.raises(TypeError):
        put_function(invalid_type, "value")
    with pytest.raises(TypeError):
        put_function("key", invalid_type)