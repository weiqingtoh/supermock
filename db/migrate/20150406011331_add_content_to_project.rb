class AddContentToProject < ActiveRecord::Migration
  def change
    add_column :projects, :content, :text
  end
end
