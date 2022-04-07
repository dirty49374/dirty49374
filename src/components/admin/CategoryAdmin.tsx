import React, { useEffect, useState } from "react";
import classNames from "classnames";
import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import { CategoryAdmin_Query_Fragment$key } from "./__generated__/CategoryAdmin_Query_Fragment.graphql";
import Dialog from "components/Dialog";
import { useInputState } from "hooks/useInputState";
import { useListEdit } from "hooks/useListEdit";
import useUpdateServiceConfigMutation from "hooks/mutations/useUpdateServiceConfigMutation";
import useErrorState from "hooks/useErrorState";

type Category = {
  id: string;
  name: string;
};

type CategoryAdminProps = {
  className?: string;
  qref: CategoryAdmin_Query_Fragment$key;
};

const CategoryAdmin: React.FC<CategoryAdminProps> = ({ className, qref }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryId] = useInputState("");
  const [categoryName] = useInputState("");
  const [error, setError] = useErrorState();

  const categoryEdit = useListEdit<Category>([]);

  const data = useFragment(
    graphql`
      fragment CategoryAdmin_Query_Fragment on Query {
        serviceConfig {
          categories {
            id
            name
          }
        }
      }
    `,
    qref
  );
  useEffect(
    () => categoryEdit.setList([...data.serviceConfig.categories]),
    [data]
  );

  const updateServiceConfig = useUpdateServiceConfigMutation();

  const handleAdd = () => {
    const category = { id: categoryId.value, name: categoryName.value };
    if (category.id && category.name) {
      categoryEdit.add(category);
      // setCategories([...categories, category]);
    }
  };

  const handleUpdate = () => {
    updateServiceConfig.commit({
      variables: {
        category: { categories: categoryEdit.list },
      },
      onError: setError,
    });
  };

  return (
    <Dialog className={className} title="카테고리 설정">
      {categoryEdit.list.map((c, n) => (
        <div key={n}>
          {n}: {c.id} / {c.name}
          <button onClick={() => categoryEdit.move(n, n - 1)}>up</button>
          <button onClick={() => categoryEdit.remove(n)}>-</button>
          <button onClick={() => categoryEdit.move(n, n + 1)}>down</button>
        </div>
      ))}
      {categoryEdit.list.length === 0 && <span>no category</span>}
      <div className="mt-5">
        <label className="mr-2" htmlFor="categoryId">
          id
        </label>
        <input className="w-32 mr-5" id="categoryId" {...categoryId} />
        <label className="mr-2" htmlFor="categoryName">
          name
        </label>
        <input className="w-32 mr-5" id="categoryName" {...categoryName} />
        <button onClick={handleAdd} className="btn-primary">
          +
        </button>
      </div>
      <div>
        <button
          onClick={handleUpdate}
          className="btn-warning"
          disabled={!categoryEdit.modified}
        >
          Update
        </button>
      </div>
    </Dialog>
  );
};

export default CategoryAdmin;
