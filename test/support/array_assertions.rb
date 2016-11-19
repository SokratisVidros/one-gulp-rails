module ArrayAssertions
  def assert_array_empty(a)
    assert Array(a).empty?
  end

  def assert_array_equal(a1, a2)
    array1 = Array(a1)
    array2 = Array(a2)
    extra_items = difference_between_arrays(array1, array2)
    missing_items = difference_between_arrays(array2, array1)
    assert extra_items.empty? && missing_items.empty?, "Extra items: #{extra_items}, Missing items: #{missing_items}"
  end

  def difference_between_arrays(array1, array2)
    difference = array1.dup
    array2.each do |element|
      if index = difference.index(element)
        difference.delete_at(index)
      end
    end
    difference
  end
end
